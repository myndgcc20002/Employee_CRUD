const express = require('express');
const mongoose = require('mongoose');
const Login = mongoose.model('Login');

const router = express.Router();

router.get("/", (req, res) => {
    res.render("login/bossLogin", {
        viewTitle: "Hello Boss!"
    })
})


router.post("/", (req, res) => {
    if (req.body._id == "") {
        loginFail();
    } else {
        loginHistory(req, res);
    }
})

function loginFail() {
    res.render("login fail");
}

function loginHistory(req, res) {
    var login = new Login();
    login.loginUser = req.body.loginUser;
    login.loginPass = req.body.loginPass;
    login.loginDate = req.body.loginDate;

    login.save((err, doc) => {
        if (!err) {
            res.redirect('employee/list');
        } else {
            if (err.name == "ValidationError") {
                handleValidationError(err, req.body);
                res.render("login/bossLogin", {
                    viewTitle: "Hello Boss!",
                    login: req.body
                })
            }
            console.log("Error occured during record insertion" + err);
        }
    })
}

router.get('/list', (req, res) => {
    Login.find((err, docs) => {
        if (!err) {
            res.render("login/list", {
                list: docs
            })
        }
    })
})

router.get('/bossLogin', (req, res) => {
    res.render("login/bossLogin")
})

router.get('/login', (req, res) => {
    res.render("/login", {
        viewTitle: "Login Employee "
    })
})

module.exports = router;