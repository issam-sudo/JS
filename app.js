const express = require('express');
const app =express();
const mongoose = require('mongoose');
require('dotenv/config')
    
//Routes
/* app.get('/', (req, res) => {
    res.send('Home');
});


app.get('/posts', (req, res) => {
    res.send('posts');
});

 */

//import router 
const postRouter = require('./routes/posts');

app.use('/posts' , postRouter);
//Connect db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true } ,
 () =>{console.log('connected to db');

});

//start listing to the server

app.listen(8000);