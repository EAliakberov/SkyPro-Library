const Book = require('../models/book');

const getbooks = (request, response) => {
    return Book.find({})
        .then((books) => {
            response.status(200).send(books);
        })
        .catch((e) => response.status(500).send(e.message));
};

const getbook = (request, response) => {
    const { book_id } = request.params;
    return Book.findById(book_id)
        .then((book) => {
            response.status(200).send(book);
        })
        .catch((e) => response.status(500).send(e.message));
};

const createbook = (request, response) => {
    return Book.create({ ...request.body })
        .then((book) => {
            response.status(201).send(book);
        })
        .catch((e) => response.status(500).send(e.message));
};

const updatebook = (request, response) => {
    const { book_id } = request.params;
    return Book.findByIdAndUpdate(book_id, { ...request.body })
        .then((book) => {
            response.status(200).send(book);
        })
        .catch((e) => response.status(500).send(e.message));
};

const deletebook = (request, response) => {
    const { book_id } = request.params;
    return Book.findByIdAndDelete(book_id)
        .then(() => {
            response.status(200).send('Книга успешно удалена');
        })
        .catch((e) => response.status(500).send(e.message));
};

module.exports = {
    createbook,
    deletebook,
    getbook,
    getbooks,
    updatebook,
};
