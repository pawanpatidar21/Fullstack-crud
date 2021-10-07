const mongoose = require("mongoose");
require('dotenv').config()
const connect = () => {
    return mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_CONNECT}:${process.env.MONGODB_PASSWORD}@cluster0.mruq4.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => {
        console.log('Connect to database enjoy')
    }).catch((err) => {
        console.log(err)
    })
};

module.exports = connect;
