const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Post  = require('../models/Post');

router.get('/',(req,res) => {
    res.send('We are on posts');
});

router.post('/',(req,res) => {

});

//middle wares (executes when we hit an route)
// app.use('/posts',() => {
//     console.log('You hitted posts');
// });


// app.get('/posts',(req,res)=>{
//     res.send('We are on posts');
// })

module.exports = router;