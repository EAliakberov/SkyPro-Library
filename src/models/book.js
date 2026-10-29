const mongoose = require('mongoose');

const bookModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
    },
    author: {
        type: String,
        required: true,
        minLength: 2,
    },
    year: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('book', bookModel);
