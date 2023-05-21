module.exports = {
  tableName: 'transaction_item',
  attributes: {
    transaction: {
      model: 'Transaction'
    },
    product: {
      model: 'Product'
    },
    quantity: {
      type: 'number',
      defaultsTo: 1
    },
    price: {
      type: 'number',
      required: true
    }
  },
};
