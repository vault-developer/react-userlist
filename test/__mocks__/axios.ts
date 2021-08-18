const defaultResolver = () => Promise.resolve({ data: {} });

module.exports = {
  get: jest.fn(defaultResolver),
  post: jest.fn(defaultResolver),
  patch: jest.fn(defaultResolver),
  put: jest.fn(defaultResolver),
  delete: jest.fn(defaultResolver),
  reset() {
    Object.assign(this, {
      get: jest.fn(defaultResolver),
      put: jest.fn(defaultResolver),
      post: jest.fn(defaultResolver),
      delete: jest.fn(defaultResolver),
    });
  },
  CancelToken: {
    source: () => ({token: 'RandomCancelToken', cancel: jest.fn()})
  }
};
