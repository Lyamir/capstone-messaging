const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser');
require('dotenv').config()
const router = require('./router/indexRouter')

const PORT = process.env.PORT || 3001
  
app.use(cookieParser());
app.use(express.urlencoded({'extended': false}))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

app.use(router)
   
app.listen(PORT, function(err){
    if (err) console.log(err)
    console.log("Server listening on PORT", PORT)
});