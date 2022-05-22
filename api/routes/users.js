var express = require('express');
var router = express.Router();
const Users = require('../model/User');

// Get all user
router.post('/', function(req, res, next) {
    const user = new Users(req.body);
    user.save();
    res.send(user)
})

// Create new user
router.get('/', function(req, res, next) {
    Users.find({}, function(err, user) {
        if (!err) {
            res.json(user);
        } else {
            res.send({
                exist: false
            });
        }
    })
})

// Get user information
router.post('/login', async function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const data = await Users.findOne({ email: email, password: password }).exec();
    // exist
    if (data) {
        // req.session.login = true;
        // req.session.email = data.email;
        // req.session.role = data.role;
        // req.session.userId = data._id;
        res.send(data);
    } else {
        res.send({
            exist: false
        });
    }
})

module.exports = router;