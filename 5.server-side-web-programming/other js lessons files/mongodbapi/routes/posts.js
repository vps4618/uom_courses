const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Post  = require('../models/Post');

//getting all posts
router.get('/',async (req,res) => {
    // getting all posts
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message:err});
    }
});

// submit  a post
router.post('/', async (req,res) => {
    
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });
    
    // saving a post to database
    try{
        
        const savedPost = await post.save();
        res.json(savedPost);

    }
    catch(err){
        res.json({message:err});
    }

});

// get a specific post
router.get('/:postId',async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch(err){
        res.json({message:err});
    }    
});

// delete a specific post
router.delete('/:postId',async (req,res) => {
    try{
        const removedPost = await Post.remove({_id:req.params.postId});
        res.json(removedPost);
    }
    catch(err){
        res.json({message:err});
    }
});

// update a post
router.patch('/:postId',async (req,res) => {
    try{
        const updatedPost = await Post.updateOne({_id:req.params.postId},{$set:req.body});
        res.json(updatedPost);
    }
    catch(err){
        res.json(err);
    }
});

//middle wares (executes when we hit an route)
// app.use('/posts',() => {
//     console.log('You hitted posts');
// });


// app.get('/posts',(req,res)=>{
//     res.send('We are on posts');
// })

module.exports = router;