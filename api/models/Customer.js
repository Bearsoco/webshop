module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      isEmail: true
    },
    address: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
  },
};
