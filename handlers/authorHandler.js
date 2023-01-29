const errorTemplate = require('../templates/errorTemplate');
const successTemplate = require('../templates/successTemplate');
let session = require('express-session');
const {
  getAuthors,
  getAuthorById,
  postAuthor,
  updateAuthorById,
  deleteAuthorById,
} = require('../services/authorService');
const { getBookIds } = require('../services/bookService');
const isEmpty = require('../utilities/util');
const messages = require('../utilities/messages');

const getAuthorsHandler = async (req, res) => {
  try {
    session = req.session;
    req.headers.authorization = 'Bearer ' + session.token;
    const authors = await getAuthors(req);
    if (!isEmpty(authors.data.result)) {
      return successTemplate(
        res,
        'authors',
        'Authors',
        authors.data.message,
        session,
        authors.data.result
      );
    } else {
      return successTemplate(
        res,
        'authors',
        'Authors',
        messages.no_authors_found,
        session
      );
    }
  } catch (e) {
    return errorTemplate(
      req,
      res,
      'authors',
      'Authors',
      e.message,
      undefined,
      undefined
    );
  }
};

const addAuthorHandler = async (req, res) => {
  try {
    session = req.session;
    req.headers.authorization = 'Bearer ' + session.token;
    const result = await getBookIds(req);
    if (!isEmpty(result.data.result)) {
      return successTemplate(
        res,
        'addAuthor',
        'Add an author',
        undefined,
        session,
        result.data.result
      );
    } else {
      return successTemplate(
        res,
        'addAuthor',
        'Add an author',
        messages.cannot_find_books,
        session
      );
    }
  } catch (e) {
    return errorTemplate(
      req,
      res,
      'authors',
      'Authors',
      e.message,
      undefined,
      undefined
    );
  }
};

const postAuthorHandler = async (req, res) => {
  try {
    session = req.session;
    req.headers.authorization = 'Bearer ' + session.token;
    const author = await postAuthor(req);
    const authors = await getAuthors(req);
    return successTemplate(
      res,
      'authors',
      'Authors',
      author.data.message,
      session,
      authors.data.result
    );
  } catch (e) {
    return errorTemplate(
      req,
      res,
      'authors',
      'Authors',
      e.message,
      undefined,
      undefined
    );
  }
};

const editAuthorHandler = async (req, res) => {
  try {
    session = req.session;
    req.headers.authorization = 'Bearer ' + session.token;
    const author = await getAuthorById(req);
    return successTemplate(
      res,
      'editAuthor',
      'Edit an author',
      author.data.message,
      session,
      author.data.result
    );
  } catch (e) {
    return errorTemplate(
      req,
      res,
      'authors',
      'Authors',
      e.message,
      undefined,
      undefined
    );
  }
};

const updateAuthorHandler = async (req, res) => {
  try {
    session = req.session;
    req.headers.authorization = 'Bearer ' + session.token;
    const result = await updateAuthorById(req);
    const authors = await getAuthors(req);
    return successTemplate(
      res,
      'authors',
      'Authors',
      result.data.message,
      session,
      authors.data.result
    );
  } catch (e) {
    return errorTemplate(
      req,
      res,
      'authors',
      'Authors',
      e.message,
      undefined,
      undefined
    );
  }
};

const deleteAuthorHandler = async (req, res) => {
  try {
    session = req.session;
    req.headers.authorization = 'Bearer ' + session.token;
    const result = await deleteAuthorById(req);
    const authors = await getAuthors(req);
    return successTemplate(
      res,
      'authors',
      'Authors',
      result.data.message,
      session,
      authors.data.result
    );
  } catch (e) {
    return errorTemplate(
      req,
      res,
      'authors',
      'Authors',
      e.message,
      undefined,
      undefined
    );
  }
};

module.exports = {
  getAuthorsHandler,
  addAuthorHandler,
  postAuthorHandler,
  deleteAuthorHandler,
  editAuthorHandler,
  updateAuthorHandler,
};
