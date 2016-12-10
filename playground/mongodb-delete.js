const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //findeOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name : "Nikita"}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: ObjectID('584bd1f6c3a186102c3e1d56')}).then((result)=>{
        console.log(result);
    });

    // db.close();
});