module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    price: {
      type: 'number',
      required: true
    },
    quantity: {
      type: 'number',
      defaultsTo: 0
    }
  },
};
