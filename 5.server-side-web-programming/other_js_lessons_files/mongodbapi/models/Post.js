const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    } 
});

PostSchema.index({title: 'text', 'profile.something': 'text'});


module.exports = mongoose.model('Posts',PostSchema);