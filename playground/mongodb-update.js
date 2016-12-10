const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('584be69cf7bf7eaadae47d69')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('584bcfa11e965f12a0a3824b')
    }, {
        $set: {
            name: 'Nikita'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});