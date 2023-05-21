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
  exits: {
    emailAlreadyInUse: {
      statusCode: 400,
      description: 'Email already in use!',
    },
  },
  fn: async function ({ customer_id, products, payment_method }, exits) {

    //Find the customer
    const customer = await Customer.findOne(customer_id);
    if (!customer) exits.emailAlreadyInUse();

    //Check if payment is among accepted payments
    const { payment, state } = sails.config.transaction;
    if (!payment[payment_method]) exits.badRequest("Payment type not found");

    //Valudate products and calculate total
    let total_amount = 0;

    const items = await Promise.all(products.map(async (product) => {
      const item = await Product.findOne(product.id);
      if (!item) exits.badRequest("Product not found");

      total_amount += (item.price * product.quantity);

      return {
        ...product,
        name: item.name,
        description: item.description,
        price: item.price
      };
    }));

    return exits.success({ customer, state, total_amount, products: items });
  }
};
