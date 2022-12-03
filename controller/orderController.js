const express = require('express');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("order/addOrEditOrder", {
        viewTitle: "Order Insert"
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
    var order = new Order();
    order.ordID = req.body.ordID;
    order.ordProduct = req.body.ordProduct;
    order.ordQuantity = req.body.ordQuantity;
    order.ordTotal = req.body.ordTotal;
    order.ordDate = req.body.ordDate;

    order.save((err, doc) => {
        if (!err) {
            res.redirect('order/list');
        } else {
            if (err.name == "ValidationError") {
                handleValidationError(err, req.body);
                res.render("order/addOrEditOrder", {
                    viewTitle: "Order Insert",
                    order: req.body
                })
            }
            console.log("Error occured during record insertion" + err);
        }
    })
}

router.get('/list', (req, res) => {
    Order.find((err, docs) => {
        if (!err) {
            res.render("order/list", {
                list: docs
            })
        }
    })
})


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'ordProduct':
                body['ordProductError'] = err.errors[field].message;
                break;

            default:
                break;
        }
    }
}

module.exports = router;