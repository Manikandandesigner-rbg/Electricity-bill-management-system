const mongoose = require('mongoose');

const BillsPaidSchema = new mongoose.Schema({
    c_id: { type: Number, required: true },
    name: { type: String, required: true },
    bill_amt: { type: Number, required: true },
    bill_paid_date: { type: Date, required: true },
    amt_paidbefore_due_date: { type: Number, required: true }
});
module.exports = mongoose.model('BillsPaid', BillsPaidSchema);
