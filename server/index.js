//imports
const express = require('express');  
const cors = require('cors');
const csurf = require('csurf');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path:'./.env'});
const { readdirSync } = require("fs");
const { request } = require('http');
const csrfProtection = csurf({ cookie: true });


const app = express(); //server setup
const port = 8000; // port setup

//database connect
mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('database connected')
})
    .catch((err)=>console.log(err))

//using imported items in the server
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json({limit:'5mb'}));

//middleware 
app.use((req,res,next)=>{
    console.log('this is my middleware');
    next();
})

//redirecting from the routes and maping the file into r
readdirSync('./routes').map((r)=>{
    return app.use('/api',require(`./routes/${r}`));
})

app.use(csrfProtection);
app.get('/api/csrf-token',(req,res)=>{
res.json({csrfToken: req.csrfToken()})
})

app.listen(port, () => {
    console.log('Our app is running on port', port)
})