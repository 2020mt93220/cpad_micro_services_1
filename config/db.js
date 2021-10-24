const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb+srv://User:user%40123@cluster0.ia6o4.mongodb.net/user?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
module.exports = conn;