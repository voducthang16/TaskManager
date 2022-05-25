var express = require('express');
var router = express.Router();
const Tasks = require('../model/Project');

// router.get('/', async function(req, res, next) {
//     Projects.find({}).populate('leader members').exec((err, result) => {
//         if (err) throw err;
//         res.json(result);
//     })
// })

router.post('/', function(req, res, next) {
    const task = new Tasks(req.body);
    task.save();
    res.send(task);
})

module.exports = router;