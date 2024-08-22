import React from 'react'
import { useState } from 'react';

const Repo = () => {
  const [githubRepo, setGithubRepo] = useState('');
  const [codeforcesHandle, setCodeforcesHandle] = useState('');
  const [githubBranch, setGithubBranch] = useState('main');
  const [directoryStructure, setDirectoryStructure] = useState('problem-name');
  const [programmingLanguage, setProgrammingLanguage] = useState('cpp');
  const [pushSchedule, setPushSchedule] = useState('daily');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    data={
      Handle:codeforcesHandle, 
      Repo:githubRepo,
      Branch:githubBranch,
      language:programmingLanguage,
      Time:pushSchedule,
      Notes:notes
    }
    
  };
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Enter Your Details</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full md:w-1/2">
        <div className="mb-4 w-full">
          <label htmlFor="githubRepo" className="block text-lg font-medium mb-2">GitHub Repository Link</label>
          <input
            type="url"
            id="githubRepo"
            value={githubRepo}
            onChange={(e) => setGithubRepo(e.target.value)}
            placeholder="https://github.com/username/repo"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4 w-full">
        <label htmlFor="pushSchedule" className="block text-lg font-medium mb-2">Automatic Push Schedule</label>
          <select
            id="pushSchedule"
            value={pushSchedule}
            onChange={(e) => setGithubBranch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg
            "
            placeholder="Branch"
          >
            <option value="daily">Main</option>
            <option value="weekly">Master</option>
            
          </select>
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="programmingLanguage" className="block text-lg font-medium mb-2">Preferred Programming Language</label>
          <select
            id="programmingLanguage"
            value={programmingLanguage}
            onChange={(e) => setProgrammingLanguage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="pushSchedule" className="block text-lg font-medium mb-2">Automatic Push Schedule</label>
          <select
            id="pushSchedule"
            value={pushSchedule}
            onChange={(e) => setPushSchedule(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="manual">Manual</option>
          </select>
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="notes" className="block text-lg font-medium mb-2">Additional Notes (Optional)</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any additional information or special instructions..."
            className="w-full p-2 border border-gray-300 rounded-lg h-32"
          ></textarea>
        </div>
        <button type="submit" className="rounded-3xl bg-black text-white p-3 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Repo
