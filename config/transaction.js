module.exports.transaction = {
    payment: {
        CREDIT_CARD: true,
        DEBIT_CARD: true,
        PAYPAL: false,
        IDEAL: true,
        KLARNA: false
    },
    state: {
        INCOMPLETE: 'incomplete',
        PROGRESS: 'in_progress',
        CONFIRMED: 'confirmed',
        SHIPPED: 'sent',
        PICKUP: 'pick_up',
        DELIVERED: 'delivered'
    }
}