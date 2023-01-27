const express = require('express');
const cors = require('cors');
const userRouter = require('../routes/userRouter');
const bookRouter = require('../routes/bookRouter');
const authorRouter = require('../routes/authorRouter');

const app = express();
// cors middleware
app.use(cors());

// json request
app.use(express.json());
// urlencoded middleware
app.use(express.urlencoded({ extended: true }));

// middleware templating
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

// static site for middleware use
app.use(express.static('public'));
app.use(express.static('views'));

// user router
app.use('/', userRouter);
// books router
app.use('/books', bookRouter);
// authors router
app.use('/authors', authorRouter);

app.use((req, res) => {
  req.session.destroy(null);
  res.status(404).render('404');
});

module.exports = app;
