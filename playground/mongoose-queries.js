const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '584bf86beee883196433909b11';
//
// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => {
//     console.log(e);
// });
let id = '584bfda0ee7cf222c8a258d2';
User.findById(id).then((user) => {
    if (!user) {
        return console.log('There is no such of user');
    }
    console.log(JSON.stringify(user, undefined, 4) );
}).catch((e) => {
    console.log(e);
});