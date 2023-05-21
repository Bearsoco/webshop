module.exports = async function signup(req, res) {
    const {customer, products, shipping_address, payment_method} = req.body;

    if (products.lenght === 0) return res.badRequest('missing.products');
    if (!customer) return res.badRequest('missing.customer.id');
    if (!shipping_address) return res.badRequest('missing.shipping.address');
    if (!payment_method) return res.badRequest('missing.payment.method');
    
    const result = await sails.helpers.transaction.create(customer, products, shipping_address, payment_method);
    
    return res.ok(result);
};