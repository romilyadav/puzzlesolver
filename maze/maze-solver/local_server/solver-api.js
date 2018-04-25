const express = require('express');
const router = express.Router();

router.post('/resolve', (req, res) => {
    var resolve = require('./resolve/resolve-maze');
    var resolvedMaze = resolve.resovleMaze(req.body.maze);
    res.json(resolvedMaze);
});

module.exports = router;