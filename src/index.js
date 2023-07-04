const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('port', 3000);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//starting server
app.listen(app.get('port'), () =>{
    console.log(`Server on port  ${app.get('port')}`);
});