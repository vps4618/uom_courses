const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/',verify,(req,res) => {
    // res.json({
    //     posts:{
    //         title:"ma first post",
    //         description:"random data you shouldn't access"
    //     }
    // })
    res.send(req.user);
});
module.exports = router;