const repo= require('../models/Repo');
const mongoose = require('mongoose');
const getRepoByHandle = async (req, res) => {
    const { Handle } = req.params;
    try {
        const repo = await repo.find({ Handle });
        res.status(200).json(repo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const createRepo = async (req, res) => {
    const { Handle, Repo, Branch, language, Time, Notes } = req.body;
    const newRepo = new repo({ Handle, Repo, Branch, language, Time, Notes });
    try {
        await newRepo.save();
        res.status(201).json(newRepo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
const updateByRepo = async (req, res) => {
    const { Handle } = req.params;
    const { Repo, Branch, language, Time, Notes } = req.body;
    if (!mongoose.Types.ObjectId.isValid(Handle)) return res.status(404).send(`No repo with that handle: ${Handle}`);
    const updatedRepo = { Repo, Branch, language, Time, Notes, _id: Handle };
    await repo.findByIdAndUpdate(Handle, updatedRepo, { new: true });
    res.json(updatedRepo);
}
const deleteRepo = async (req, res) => {
    const { Handle } = req.params;
    if (!mongoose.Types.ObjectId.isValid(Handle)) return res.status(404).send(`No repo with that handle: ${Handle}`);
    await repo.findByIdAndRemove(Handle);
    res.json({ message: 'Repo deleted successfully' });
}
module.exports = { getRepoByHandle, createRepo, updateByRepo, deleteRepo };