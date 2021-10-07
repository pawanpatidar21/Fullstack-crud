const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    age: {
        type: Number,
        required: true,
        trim: true

    },
    gender: {
        type: String,
        required: true,
        trim: true


    },

    city: {
        type: String,
        required: true,
        trim: true,


    }

}, {
    timestamps: true
})

module.exports = mongoose.model('student', studentSchema)