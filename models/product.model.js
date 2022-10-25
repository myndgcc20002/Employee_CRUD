const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: 'This field is required'
    },
    NameProduct: {
        type: String,
        required: 'This field is required'
    },
    Category: {
        type: String
    },
    Origin: {
        type: String,
        required: 'This field is required'
    },
    Description: {
        type: String
    }
})


mongoose.model('Product', productSchema);