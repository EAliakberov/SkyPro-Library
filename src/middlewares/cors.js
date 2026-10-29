const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, HEAD, POST, PATCH, DELETE'
    );
    next();
};

module.exports = cors;
