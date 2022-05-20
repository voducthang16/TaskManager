var express = require('express');
var router = express.Router();
const Users = require('../model/User');

// Create new user
router.post('/', function(req, res, next) {
    const user = new Users(req.body);
    user.save();
    res.send(user)
})

module.exports = router;