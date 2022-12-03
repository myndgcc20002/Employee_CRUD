require('./models/db');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const employeeController = require('./controller/employeeController');
const productController = require('./controller/productController');
const orderController = require('./controller/orderController');
const tableController = require('./controller/tableController');
const loginController = require('./controller/loginController');

const bossLoginController = require('./controller/bossLogin');


var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views/'))

app.engine('hbs', expressHandlebars({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))

// app.get('/', function(req, res) {
//     res.send('Hello world')
// })
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is listening on Port 3000");
})

app.use('/employee', employeeController);
app.use('/product', productController);
app.use('/order', orderController);
app.use('/table', tableController);
app.use('/login', loginController);
app.use('/bosslogin', bossLoginController);
app.use('/', loginController);