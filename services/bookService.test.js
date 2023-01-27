const service = require('./bookService');

jest.mock('./bookService');

// describe, test, expect

describe('Test Book service functions', () => {
  test('As a user I want to get a book', async () => {
    const books = await service.getBooks();
    expect(books.data[0].title).toEqual('War and Peace');
    expect(books.data[0].author).toEqual('Leo Tolstoy');
    expect(books.data[0].ISBN).toEqual('123-234-67-0');
    expect(books.data[0].numberOfPages).toEqual('2314');
    expect(books.data[0].price).toEqual(78.99);
    expect(books.data[0].yearPublished).toEqual('1888');
  });

  test('As a user I want to save a book and get the book', async () => {
    const book = await service.postBook();
    expect(book.data.title).toEqual('War and Peace');
    expect(book.data.author).toEqual('Leo Tolstoy');
    expect(book.data.ISBN).toEqual('123-234-67-0');
    expect(book.data.numberOfPages).toEqual('2314');
    expect(book.data.price).toEqual(78.99);
    expect(book.data.yearPublished).toEqual('1888');
  });

  test('As a user I want to get a book by Id and return the book', async () => {
    const book = await service.getBookById();
    expect(book.data.title).toEqual('War and Peace');
    expect(book.data.author).toEqual('Leo Tolstoy');
    expect(book.data.ISBN).toEqual('123-234-67-0');
    expect(book.data.numberOfPages).toEqual('2314');
    expect(book.data.price).toEqual(78.99);
    expect(book.data.yearPublished).toEqual('1888');
  });

  test('As a user I want to update a book by id and return acknowledgement', async () => {
    const book = await service.updateBookById();
    expect(book.data.acknowledged).toEqual(true);
    expect(book.data.modifiedCount).toEqual(1);
    expect(book.data.upsertedId).toEqual(null);
    expect(book.data.upsertedCount).toEqual(0);
    expect(book.data.matchedCount).toEqual(1);
  });

  test('As a user I want to delete a book by Id and return acknowledgement', async () => {
    const book = await service.deleteBookById();
    expect(book.data.acknowledged).toEqual(true);
    expect(book.data.deletedCount).toEqual(1);
  });

  test('As a user I want to get the book Ids', async () => {
    const books = await service.getBookIds();
    expect(books.data[0]._id).toEqual('63d419cceaaed188289be39f');
    expect(books.data[0].title).toEqual('War and Peace');
  });
});
