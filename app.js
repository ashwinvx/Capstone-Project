const express = require('express');
const ExpressError = require('./expressError');
const mongoose = require('mongoose');
const Journal = require('./models/journal');

//express app
const app = express();
const port = 3000;

//connect to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@traveljournal.bzksetz.mongodb.net/travel-journal';
mongoose.connect(dbURI)
    .then(result => app.listen(port, () => console.log(`Server is running on http://localhost:${port}`)))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.redirect('/journals');
})

app.get('/add-journal', (req, res) => {
    const journal = new Journal({
        title: 'new journal 2',
        description: 'more about my journal 2'
    });
    journal.save()
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

app.get('/journals', (req, res) => {
    Journal.find()
        .then(result => res.send(result))
        .catch(err => console.log(err));
})

app.get('/single-journal', (req, res) => {
    Journal.findById('68a38766567d4e8c27f40791')
        .then(result => res.send(result))
        .catch(err => console.log(err));
})
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

