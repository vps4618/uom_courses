const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('We are on posts');
});

router.get('/specific',() => {
    res.send('Specific post');
});
//middle wares (executes when we hit an route)
// app.use('/posts',() => {
//     console.log('You hitted posts');
// });


// //routes
// app.get('/',(req,res)=>{
//     res.send('We are on home');
// })

// app.get('/posts',(req,res)=>{
//     res.send('We are on posts');
// })

module.exports = router;