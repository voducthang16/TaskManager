var express = require('express');
var router = express.Router();
const Tasks = require('../model/Task');

// get all
router.get('/', function(req, res, next) {
    Tasks.find({}).populate('projectId memberId').exec((err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

// get task list by project id
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    Tasks.find({ projectId: id }).populate('memberId').exec((err, result) => {
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