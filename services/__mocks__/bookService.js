const getBooks = async () => {
  console.log('Mocked get books');
  return Promise.resolve({
    data: [
      {
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        ISBN: '123-234-67-0',
        numberOfPages: '2314',
        price: 78.99,
        yearPublished: '1888',
      },
    ],
  });
};

const postBook = async () => {
  console.log('Mocked post book');
  return Promise.resolve({
    data: {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      ISBN: '123-234-67-0',
      numberOfPages: '2314',
      price: 78.99,
      yearPublished: '1888',
    },
  });
};

const getBookById = async () => {
  console.log('Mocked gte book by Id');
  return Promise.resolve({
    data: {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      ISBN: '123-234-67-0',
      numberOfPages: '2314',
      price: 78.99,
      yearPublished: '1888',
    },
  });
};

const updateBookById = async () => {
  console.log('Mocked update book by Id');
  return Promise.resolve({
    data: {
      acknowledged: true,
      modifiedCount: 1,
      upsertedId: null,
      upsertedCount: 0,
      matchedCount: 1,
    },
  });
};

const deleteBookById = async () => {
  console.log('Mocked delete book by Id');
  return Promise.resolve({
    data: {
      acknowledged: true,
      deletedCount: 1,
    },
  });
};

const getBookIds = async () => {
  console.log('Mocked get book ids');
  return Promise.resolve({
    data: [
      {
        _id: '63d419cceaaed188289be39f',
        title: 'War and Peace',
      },
    ],
  });
};

module.exports = {
  getBooks,
  postBook,
  getBookById,
  getBookIds,
  updateBookById,
  deleteBookById,
};
