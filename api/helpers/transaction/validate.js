module.exports = {
  friendlyName: 'Creates a new transaction (order)',
  description: 'Returns all data related to the transaction and sends the confirmation',
  inputs: {
    customer_id: {
      type: 'number',
      required: true
    },
    products: {
      type: 'json',
      required: true
    },
    payment_method: {
      type: 'string',
      required: true
    }
  },
  fn: async function ({ customer_id, products, payment_method }, exits) {

    //Find the customer
    const customer = await Customer.findOne(customer_id);
    if (!customer){
      return exits.error('customer.notFound');
    }

    //Check if payment is among accepted payments
    const { payment, state } = sails.config.transaction;
    if (!payment[payment_method]) {
      return exits.error('payment.notFound');
    }

    //Valudate products and calculate total
    let total_amount = 0;

    const items = await Promise.all(products.map(async (product) => {
      const item = await Product.findOne(product.id);
      if (!item){
        return exist.error('product.notFound');
      }

      total_amount += (item.price * product.quantity);

      return item;
    }));

    return exits.success({ customer, state, total_amount, products: items });
  }
};
