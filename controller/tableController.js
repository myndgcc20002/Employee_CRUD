const express = require('express');
const mongoose = require('mongoose');
const Table = mongoose.model('Table');
const Product = mongoose.model('Product');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("table/addOrEdit", {
        viewTitle: "Thêm Bàn"
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
    var table = new Table();
    table.tabID = req.body.tabID;
    table.tabProduct = req.body.tabProduct;
    table.tabQuantity = req.body.tabQuantity;
    table.tabStatus = req.body.tabStatus;
    table.tabTotal = req.body.tabTotal;
    table.tabDate = req.body.tabDate;
    table.tabNoti = req.body.tabNoti;
    table.proName = req.body.proName;
    table.proPrice = req.body.proPrice;

    table.save((err, doc) => {
        if (!err) {
            res.redirect('table/list');
        } else {
            if (err.name == "ValidationError") {
                handleValidationError(err, req.body);
                res.render("table/addOrEdit", {
                    viewTitle: "Thêm Bàn",
                    table: req.body
                })
            }
            console.log("Error occured during record insertion" + err);
        }
    })
}

function updateRecord(req, res) {
    Table.findOneAndUpdate({ _id: req.body._id, }, req.body, { new: true }, (err, doc) => {
        if (!err) {
            res.redirect('table/list');
        } else {
            if (err.name == "ValidationError") {
                handleValidationError(err, req.body);
                res.render("table/addOrEdit", {
                    viewTitle: 'Update Table',
                    table: req.body
                });
            } else {
                console.log("Error occured in Updating the records" + err);
            }
        }
    })
}

router.get('/list', (req, res) => {
    Table.find((err, docs) => {
        if (!err) {
            res.render("table/list", {
                list: docs
            })
        }
    })
})

router.get('/addPro/:id', (req, res) => {
    Table.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("table/addPro", {
                viewTitle: "Add Product",
                table: doc
            })
        }
    })
})

router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("table/addOrEdit", {
                viewTitle: "Update Table",
                table: doc
            })
        }
    })
})

router.get('/delete/:id', (req, res) => {
    Table.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/table/list');
        } else {
            console.log("An error occured during the Delete Process" + err);
        }
    })
})

router.get('/insert', (req, res) => {
    Product.find((err, docs) => {
        if (!err) {
            res.render("product/list", {
                list: docs
            })
        }
    })
})

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'tabProduct':
                body['tabProductError'] = err.errors[field].message;
                break;

            default:
                break;
        }
    }
}

module.exports = router;