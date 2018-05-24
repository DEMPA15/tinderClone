const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(session({
    name: `TinderClone`,
    secret: process.env.SESSION_SECRET, 
    cookie: {
        expires:  5 * 24 * 60 * 60 *1000,
    },
    saveUninitialized: false,
    rolling: true,
    resave: false,
}));

app.get('/api/craig', (req, res) => {
    res.send('Craig');
})


const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})