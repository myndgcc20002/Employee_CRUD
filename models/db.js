const mongoose = require('mongoose');
const url = "mongodb+srv://my:admin@123@cluster0.e0p10pr.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log("MongoDB Connection Succeeded"); } else {
        console.log("An Error Occured");
    }
})

require('./employee.model');
require('./product.model');
require('./order.model');
require('./table.model');
require('./login.model');