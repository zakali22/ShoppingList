const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();



const items = require('./routes/api/items');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Connect to database
const db = ('mongodb://localhost:27017/cartlist');
mongoose.connect(db)
		.then(() => console.log('Connected to DB'))
		.catch(err => console.log(err));


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
});

// Use the API route
app.use('/api/items', items);

if(port.env.NODE_ENV === 'production'){
    app.use(express.static('clientside/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'clientside', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
})