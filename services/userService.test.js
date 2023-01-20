const service = require('./userService');

jest.mock('./userService');

describe('Test Service calls backend', () => {
  test('Post Register should return a user', async () => {
    let id = Math.floor(Math.random() * 100);
    const body = {
      firstName: 'Eric',
      lastName: 'Clarke',
      address: '123 Mile Road',
      city: 'Topeka',
      state: 'KS',
      zipCode: '12345',
      email: `cryptoboy${id}@gmail.com`,
      password: 'Kahli1994',
    };

    const user = await service.postRegister(body);
    expect(user.data.message).toEqual('Successful Registration');
    expect(user.data.user.firstName).toEqual('Eric');
    expect(user.data.user.lastName).toEqual('Clarke');
    expect(user.data.user.address).toEqual('123 Mile Road');
    expect(user.data.user.city).toEqual('Topeka');
    expect(user.data.user.state).toEqual('KS');
    expect(user.data.user.zipCode).toEqual('12345');
  });

  test('Post Login should return a user', async () => {
    const body = {
      email: 'eric@eric.com',
      password: 'Nancy1999',
    };

    const user = await service.postLogin(body);
    expect(user.data.message).toEqual('Login Successful');
    expect(user.data.user.firstName).toEqual('Eric');
    expect(user.data.user.lastName).toEqual('Clarke');
    expect(user.data.user.address).toEqual('123 Main St');
    expect(user.data.user.city).toEqual('JAX');
    expect(user.data.user.state).toEqual('FL');
    expect(user.data.user.zipCode).toEqual('32222');
    expect(user.data.logged).toBe(true);
  });
});
