const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const router = require('./router');

const port = 3000;

//Config
    //Handlebars Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    //Body-Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    //Rotas
    app.use(router);

app.listen(port, ()=>{
    console.log('Server listening on port: ' + port);
})