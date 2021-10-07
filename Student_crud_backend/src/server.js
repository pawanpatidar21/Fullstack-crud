require("dotenv").config();

const express = require("express");
const connect = require("./configs/db");
const studentRoute = require('./Routes/student')
const cors = require('cors')
const app = express();
app.use(express.json());
app.use('/', studentRoute)
app.use(cors())
async function start() {
    await connect();
    app.listen(process.env.PORT, function () {
        console.log(`Listening on port http://localhost:${process.env.PORT}`);
    });
}

start();

