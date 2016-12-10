// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 4));
    // });
    //
    // db.collection('Users').insertOne({
    //     name: 'Nikita',
    //     age: 24,
    //     location: 'Dnepr'
    // }, (err, result)=>{
    //     if(err) {
    //         return console.log(err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //
    // });

    db.close();
});