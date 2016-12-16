const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abcd!';

// bcrypt.genSalt(10, (error, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// });

let hashedPasword = '$2a$10$03B8OTNE8YdhprSTV7v04uHF2Z1OveMFsg/FZE.xGLQ7gXR.Hf/tK';

bcrypt.compare(password, hashedPasword, (err, res) => {
    console.log(res);
});


// let data = {
//     id: 10
// };
//
// let token = jwt.sign(data, '123abc');
// console.log(token);
//
// let decoded = jwt.verify(token,'123abc');
//
// console.log(decoded);


// let message = 'I am user number 3';
//
// let hash = SHA256(message).toString();
//
// console.log(`Message ${message}`);
// console.log(`Hash ${hash}`);
// let data = {
//     id: 4
// };
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// let resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//     console.log('Data was not change');
// } else {
//     console.log('Data was changed. Do not trust!');
// }
