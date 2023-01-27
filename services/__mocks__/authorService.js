const getAuthors = async () => {
  console.log('Mocked get authors');
  return Promise.resolve({
    data: [
      {
        name: 'Leo Tolstoy',
        book: {
          title: 'War and Peace',
          author: 'Leo Tolstoy',
          ISBN: '123-12-145-0',
          numberOfPages: '3467',
          price: 45.79,
          yearPublished: '1888',
        },
        publisher: 'tynsdale',
        website: 'www.tynsdale.com',
        twitter: '@Leo',
        about: "I'm Leo",
      },
    ],
  });
};

const getAuthorById = async (req) => {
  console.log('Mocked get author by Id');
  return Promise.resolve({
    data: {
      name: 'Leo Tolstoy',
      book: {
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        ISBN: '123-12-145-0',
        numberOfPages: '3467',
        price: 45.79,
        yearPublished: '1888',
      },
      publisher: 'tynsdale',
      website: 'www.tynsdale.com',
      twitter: '@Leo',
      about: "I'm Leo",
    },
  });
};

const postAuthor = async () => {
  console.log('Mocked post author');
  return Promise.resolve({
    data: {
      name: 'Leo Tolstoy',
      publisher: 'tynsdale',
      website: 'www.tynsdale.com',
      twitter: '@Leo',
      about: "I'm Leo",
    },
  });
};

const updateAuthorById = async () => {
  console.log('Mocked update author by Id');
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

const deleteAuthorById = async () => {
  console.log('Mocked delete author by Id');
  return Promise.resolve({
    data: {
      acknowledged: true,
      deletedCount: 1,
    },
  });
};

module.exports = {
  getAuthors,
  postAuthor,
  deleteAuthorById,
  getAuthorById,
  updateAuthorById,
};
