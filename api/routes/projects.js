var express = require('express');
var router = express.Router();
const Projects = require('../model/Project');

// router.get('/', function(req, res, next) {
//     res.send('hello with')
// })

router.post('/', function(req, res, next) {
    const project = new Projects(req.body);
    project.save();
    res.send(project);
})

module.exports = router;