const mongoose = require('mongoose');

var ordersSchema = new mongoose.Schema({
    ordID: {
        type: String
    },
    ordProduct: {
        type: String,
        required: 'Add Product, Please!'
    },
    ordQuantity: {
        type: String
    },
    ordTotal: {
        type: String
    },
    ordDate: {
        type: Date,
        default: Date.now()
    },
    tabFeedback: {
        type: String
    },
    cusName: {
        type: String
    }
});

mongoose.model('Order', ordersSchema);