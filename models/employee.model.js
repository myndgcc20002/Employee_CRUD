const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Enter Full Name, Please!'
    },
    phone: {
        type: String
    },
    birth: {
        type: String
    },
    position: {
        type: String
    },
    userName: {
        type: String,
        required: 'Enter User Name, Please!'
    },
    password: {
        type: String,
        required: 'Enter Password, Please!'
    }

})

mongoose.model('Employee', employeeSchema);