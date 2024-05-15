const express = require("express");
const morgan = require('morgan');

const tshirtRouter = require('./tshirt');

const app = express();

app.set('view engine','pug');
app.use(express.static('public'))
app.use(morgan('common',{ immediate: true }));
app.use(express.urlencoded({ extended:false}));

app.use('/tshirt',tshirtRouter);
app.get('/',(request,response)=>response.redirect('/tshirt'));

app.listen(8080, () => {
    console.log('Server is listening to http://localhost:8080');
});