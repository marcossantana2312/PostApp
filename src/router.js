const express = require('express');
const routes = express.Router();
const PostController = require('./controller/PostController');

routes.get('/cad', (req, res)=>{
    res.render('form');
})

routes.post('/save', (req, res)=>{
   if(req.params.id){
        PostController.editar(req, res);
   }else{
       PostController.criar(req, res);
   }});

routes.get('/', PostController.listarTodos);
//A rota com o metodo HTTP DELETE, seria o correto em uma API REST, mas nesse caso como o HTML só trabalha
//com GET e POST, o metodo GET vai ser usado para deletar a postagem
// routes.delete('/deletar/:id', PostController.apagar);
routes.get('/deletar/:id', PostController.apagar);

routes.get('/cad/:id', (req, res)=>{
    res.render('form', {id: req.params.id});
});

module.exports = routes