const Post = require('../models/Post');

module.exports = {
    criar : async(req, res)=>{
        await Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        });
        res.
            // sendStatus(201).
            redirect('/');        
    },

    listarTodos: async(req, res)=>{
        await Post.all()
            .then((posts) => {               
                res.render('home', {posts: posts});
            }).catch((err)=>{
                console.log(err);
            })
    },

    apagar: async(req, res)=>{
        const id = req.params.id;
        await Post.destroy({where:{
            id: id
        }}).then(()=>{
            res
                // .sendStatus(204)
                .redirect('/');
        }).catch((err)=>{
            console.log(err);      
        })
    },

    editar: async(req, res)=>{
        const id = req.params.id;
        const titulo = req.params.titulo;
        const conteudo = req.params.conteudo;

        await Post.update({
            titulo: titulo,
            conteudo: conteudo
        },
        {
            where:{
            id:id
        }}).then(()=>{
            res
                // .sendStatus(201)
                .redirect('/');
        }).catch(err => console.log(err))
    }
}