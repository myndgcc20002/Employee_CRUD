const mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: 'This field is required'
    },
    Password: {
        type: String
    },
    accessTime: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('Login', loginSchema);