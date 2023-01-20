const postRegister = async (body) => {
  console.log('Mocked Register');
  return Promise.resolve({
    data: {
      user: {
        firstName: 'Eric',
        lastName: 'Clarke',
        address: '123 Mile Road',
        city: 'Topeka',
        state: 'KS',
        zipCode: '12345',
      },
      message: 'Successful Registration',
    },
  });
};

const postLogin = async (body) => {
  console.log('Mocked Login');
  return Promise.resolve({
    data: {
      user: {
        firstName: 'Eric',
        lastName: 'Clarke',
        address: '123 Main St',
        city: 'JAX',
        state: 'FL',
        zipCode: '32222',
      },
      message: 'Login Successful',
      logged: true,
    },
  });
};

module.exports = { postRegister, postLogin };
