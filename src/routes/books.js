const router = require('express').Router();
const {
    getbooks,
    getbook,
    updatebook,
    deletebook,
    createbook,
} = require('../controllers/books');




router.get('/books', getbooks);
router.get('/books/:book_id', getbook);
router.post('/books', createbook);
router.patch('/books/:book_id', updatebook);
router.delete('/books/:book_id', deletebook); // добавлен id

module.exports = router; // экспорт router
