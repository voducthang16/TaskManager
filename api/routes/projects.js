var express = require('express');
var router = express.Router();
const Projects = require('../model/Project');

router.get('/', function(req, res, next) {
    Projects.find({}).populate('leader members').exec((err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    Projects.find({ _id: id }).populate('leader members').exec((err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

router.post('/', function(req, res, next) {
    const project = new Projects(req.body);
    project.save();
    res.send(project);
})

module.exports = router;