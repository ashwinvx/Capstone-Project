const express = require('express');
const ExpressError = require('./expressError');
const app = express();
const port = 3000;

/** general error handler */

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);

    // pass the error to the next piece of middleware
    return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});