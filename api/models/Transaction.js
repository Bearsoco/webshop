module.exports = {
  attributes: {
    reference: {
      type: 'string',
      unique: true,
    },
    customer: {
      model: 'Customer'
    },
    date: { //timestamp
      type: 'ref',
      columnType: 'int8',
      defaultsTo: Date.now()
    },
    total_amount: {
      type: 'number'
    },
    shipping_address: {
      type: 'string',
      required: true
    },
    payment_method: {
      type: 'string',
      required: true
      //isIn
    },
    state: {
      type: 'string',
      required: true,
      // isIn
    }
  },
};
