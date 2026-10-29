const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },
    surname: {
        type: String,
        required: true,
        minLength: 2,
    },
    username: {
        type: String,
        required: true,
        minLength: 5,
    },
});

module.exports = mongoose.model('user', userModel);
