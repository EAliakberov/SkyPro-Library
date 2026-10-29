const express = require('express');
const dotenv = require('dotenv');
const cors = require('./middlewares/cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books'); // исправлено

dotenv.config();
const { PORT = 3000, API_URL = 'http://localhost', DB_URL } = process.env;

async function start() {
    try {
        await mongoose.connect(DB_URL);          // await + catch
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
        });
    } catch (err) {
        console.error('Ошибка подключения к БД:', err.message);
        process.exit(1);
    }
}

const app = express();
app.use(cors);
app.use(express.json());
app.use(userRouter);
app.use(bookRouter);

// 404
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        error: err.message || 'Server error',
    });
});

start()