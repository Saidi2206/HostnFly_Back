const express = require('express');
const cors = require('cors');
const router = require('./routes/router');

require('./config/connect');


const app = express(); 
app.use(express.json());
app.use(cors());

app.use('/', router);


app.listen(3000,() =>{
    console.log('Server is running on port 3000');
}) 
