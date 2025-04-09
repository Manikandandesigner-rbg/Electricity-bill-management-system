const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema({
    c_id: { type: Number, required: true },
    card_number: { type: String, required: true, unique: true },
    card_name: { type: String, required: true }
});
module.exports = mongoose.model('Card', CardSchema);
