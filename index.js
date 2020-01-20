const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db');
const accoutn = require('./routes/account')

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log('Successful connection');
});

mongoose.connection.on('error', (err) => {
    console.log('Unsuccessful connection' + err);
});

app.get('/', (req, res) => {
    res.send('Main page')
});

app.use('/account', accoutn);

app.listen(port, () => {
    console.log("Server open " + port);
})