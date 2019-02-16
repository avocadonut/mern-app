const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/database');
const port = 5000;
const app = express();

mongoose.Promise = global.Promise;
mongoose
.connect(
    config.database,
    {useNewUrlParser: true }
)
.then(() => {
    console.log(`Connected to MongoDB`);
})
.catch((err) => {
    console.log(err, "Can't connect to MongoDB");
});

// configuration of the body-parser
app
    .use(cors())
    .use(bodyParser.urlencoded({ extended:  false }))
    .use(bodyParser.json());

// default endpoin of api
app.use(`/api/employees`, require(`./routes/employeeRoutes`));

// opens the port to corresponding port number
app.listen(port, (err) => {
    if(err){
        console.log(err, "Can't connect to the server.");
    }
    console.log(`Server is open at port ${ port }`);
});

