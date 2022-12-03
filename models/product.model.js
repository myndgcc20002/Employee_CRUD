const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    proID: {
        type: String,
        required: 'Enter ID of Product, Please!'
    },
    proName: {
        type: String,
        required: 'Enter Name of Product, Please!'
    },
    proPrice: {
        type: String,
        required: 'Enter Price of Product, Please!'
    },
    proType: {
        type: String
    },
    proDescription: {
        type: String
    }
})

mongoose.model('Product', productSchema);