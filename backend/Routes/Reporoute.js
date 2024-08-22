const repocontroller = require('../controllers/repocontroller');
const express = require('express');
const router = express.Router();
router.get('/:Handle', repocontroller.getRepoByHandle);
router.post('/', repocontroller.createRepo);
router.patch('/:Handle', repocontroller.updateByRepo);
router.delete('/:Handle', repocontroller.deleteRepo);
module.exports = router;