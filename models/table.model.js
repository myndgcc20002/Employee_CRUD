const mongoose = require('mongoose');

var tableSchema = new mongoose.Schema({
    tabID: {
        type: String
    },
    tabProduct: {
        type: String,
        required: 'Add Product, Please!'
    },
    tabQuantity: {
        type: String
    },
    tabTotal: {
        type: String
    },
    tabStatus: {
        type: String
    },
    tabNoti: {
        type: String
    },
    proName: {
        type: String
    },
    proPrice: {
        type: String
    },
    tabDate: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('Table', tableSchema);