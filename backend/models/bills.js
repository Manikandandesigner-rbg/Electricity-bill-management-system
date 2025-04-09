const mongoose = require('mongoose');

const BillsSchema = new mongoose.Schema({
    c_id: { type: Number, required: true },
    name: { type: String, required: true },
    amt_topay: { type: Number, required: true },
    due_date: { type: Date, required: true }
});

module.exports = mongoose.model('Bills', BillsSchema);
