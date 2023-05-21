module.exports = {
  friendlyName: 'Creates a new transaction (order)',
  description: 'Returns all data related to the transaction and sends the confirmation',
  inputs: {
    customer_id: {
      type: 'number',
      required: true
    },
    products: {
      type: 'ref',
      required: true
    },
    shipping_address: {
      type: 'string',
      required: true
    },
    payment_method: {
      type: 'string',
      required: true
    }
  },
  fn: async function ({ customer_id, products, shipping_address, payment_method }, exits) {

    //Validate transaction
    const { customer, state, total_amount, products: items } = await sails.helpers.transaction.validate(
      customer_id,
      products,
      payment_method
    );

    //create unique reference transaction number
    const reference = Math.floor((Date.now() * Math.random()) / 1000);

    //Create the transaction
    const transaction = await Transaction.create({
      customer: customer.id,
      shipping_address,
      reference,
      payment_method,
      state: state.CONFIRMED,
      total_amount
    }).fetch();

    //add transaction items
    items.map(async item => {
      await TransactionItem.create({
        product: item.id,
        quantity: item.quantity,
        transaction: transaction.id,
        price: item.price
      });

      delete item.id;
    });

    const result = {
        transaction: _.omit(transaction, ['id', 'customer']),
        products: _.omit(items, ['id']),
        customer: _.omit(customer, ['id'])
    };

    //send validation
    await sails.helpers.transaction.sendConfirmation(result);

    return exits.success(result);
  }
};
