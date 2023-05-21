const nodemailer = require('nodemailer');

module.exports = {
  friendlyName: 'Sends confirmation email',
  inputs: {
    data: {
      type: 'ref',
      required: true
    }
  },
  fn: async function ({ data }, exits) {

    const {transaction, customer, products} = data;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'onec9513@gmail.com',
        pass: 'momqbztkfbplnhbc'
      }
    });

    const mailOptions = {
      from: 'onec9513@gmail.com',
      to: 'onec9513@gmail.com',
      subject: 'Order Confirmation - BellaShop',
      text: `Hi ${customer.name}! \n Order: ${transaction.reference}. Total: ${transaction.total_amount}€
        \n Address: ${transaction.shipping_address}
        \n State:  ${transaction.state}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return exits.success();
  }
};
