const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) =>{
//     console.log(result);
// });

// Todo.findOneAndRemove

//Todo.findByIdAndRemove

// Todo.findByIdAndRemove('584d197c2114eb82883a1935').then((todo)=>{
//     console.log(todo);
// });