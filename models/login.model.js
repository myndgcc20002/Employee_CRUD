const mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
    loginUser: {
        type: String
    },
    loginPass: {
        type: String,
    },
    loginDate: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('Login', loginSchema);