const express = require('express');
const authorRouter = express.Router();
let session = require('express-session');
const {
  getAuthorsHandler,
  addAuthorHandler,
  postAuthorHandler,
  editAuthorHandler,
  updateAuthorHandler,
  deleteAuthorHandler,
} = require('../handlers/authorHandler');
require('dotenv').config();

// middleware for express session
authorRouter.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: true,
  })
);

authorRouter.get('/', getAuthorsHandler);

authorRouter.post('/', postAuthorHandler);

authorRouter.post('/update', updateAuthorHandler);

authorRouter.get('/addAuthor', addAuthorHandler);

authorRouter.get('/editAuthor/:id', editAuthorHandler);

authorRouter.get('/deleteAuthor/:id', deleteAuthorHandler);

module.exports = authorRouter;
