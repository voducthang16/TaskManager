var express = require('express');
var router = express.Router();
const Tasks = require('../model/Task');

router.get('/', function(req, res, next) {
    Tasks.find({}).populate('projectId memberId').exec((err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

router.post('/', function(req, res, next) {
    const task = new Tasks(req.body);
    task.save();
    res.send(task);
})

module.exports = router;