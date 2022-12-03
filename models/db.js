const mongoose = require('mongoose');
//const url = "mongodb://localhost:27017/EmployeeDB";
//const url = "mongodb+srv://tmtuan:**************@cluster0.zfovn.mongodb.net/test"
<<<<<<< HEAD
const url = "mongodb+srv://my:admin@123@cluster0.e0p10pr.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log("MongoDB Connection Succeeded"); } else {
=======
const url = "mongodb+srv://tmtuan:Zdub8FnkJh9cTrsm@cluster0.e6jqisa.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
>>>>>>> 1502bedec55dd9f5bf97c5745b3af1f800d3e0b0
        console.log("An Error Occured");
    }
})

require('./employee.model');
require('./product.model');
require('./login.model');
require('./orders.model');