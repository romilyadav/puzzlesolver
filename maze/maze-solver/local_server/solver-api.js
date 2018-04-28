const express = require('express');
const router = express.Router();

router.post('/resolve', (req, res) => {
    const resolve = require('./resolve/resolve-maze');
    var resolvedMaze = resolve.resovleMaze(req.body);
    res.json(resolvedMaze);
});

module.exports = router;