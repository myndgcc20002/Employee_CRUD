const express = require('express');
const mongoose = require('mongoose');
const Login = mongoose.model('Login');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("login/historyLogin", {
        viewTitle: "Login"
    })
})


router.post("/", (req, res) => {
    if (req.body._id == "") {
        insertRecord(req, res);
    } else {
        updateRecord(req, res);
    }
})

function insertRecord(req, res) {
    var login = new Login();
    login.ID = req.body.ID;
    login.Password = req.body.Password;

    login.save((err, doc) => {
        if (!err) {
            res.redirect('orders/list');
        } else {
            if (err.name == "ValidationError") {
                handleValidationError(err, req.body);
                res.render("login/historyLogin", {
                    viewTitle: "Login Again",
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


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'ID':
                body['IDError'] = err.errors[field].message;
                break;

            default:
                break;
        }
    }
}

module.exports = router;