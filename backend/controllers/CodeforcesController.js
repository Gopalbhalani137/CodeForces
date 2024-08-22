const axios = require('axios');
const CodeforcesSubmission = require('../models/CodeforcesSubmission');
const Config = require('../models/Config');

module.exports = {
  fetchSubmissions: async (req, res) => {
    try {
      const userId = req.user.id;
      const config = await Config.findOne({ userId });

      if (!config) return res.status(404).json({ message: 'Settings not found' });

      const { codeforcesHandle, startTime, endTime } = config;

      // Fetch submissions from Codeforces API
      const response = await axios.get(`https://codeforces.com/api/user.status?handle=${codeforcesHandle}`);
      const submissions = response.data.result.filter(submission => {
        const submissionTime = new Date(submission.creationTimeSeconds * 1000);
        return submissionTime >= new Date(startTime) && submissionTime <= new Date(endTime);
      });

      // Save submissions to the database
      const submissionDocs = submissions.map(submission => ({
        userId,
        submissionId: submission.id,
        problemId: submission.problem.contestId + submission.problem.index,
        submissionTime: new Date(submission.creationTimeSeconds * 1000),
        status: submission.verdict,
        language: submission.programmingLanguage,
      }));
      await CodeforcesSubmission.insertMany(submissionDocs);

      res.status(200).json({ message: 'Submissions fetched and saved successfully', submissions: submissionDocs });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching submissions', error });
    }
  }
};
