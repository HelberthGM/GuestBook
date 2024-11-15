const express = require('express')
const path = require('path')
const morgan = require('morgan');
const { log } = require('console');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middelwares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/entries.routes'));

// 404 Handler
app.use((req, res) => {
    // res.status(404).send('404 not found');
    res.status(404).render('404');
})

// Starting app
app.listen(app.get('port'), () =>  {
    console.log('server on port:', app.get('port'));
});