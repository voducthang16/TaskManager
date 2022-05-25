var express = require('express');
var router = express.Router();
const Projects = require('../model/Project');

router.get('/', async function(req, res, next) {
    Projects.find({}).populate('leader members').exec((err, result) => {
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