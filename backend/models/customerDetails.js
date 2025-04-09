const mongoose = require('mongoose');
const CustomerDetailsSchema = new mongoose.Schema({
    c_id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    occupation: { type: String },
    phone: { type: Number },
    dob: { type: Date },
    flat_no: { type: Number },
    address: { type: String },
    pincode: { type: Number },
    state: { type: String },
    city_village: { type: String }
});

module.exports = mongoose.model('CustomerDetails', CustomerDetailsSchema,"customer_details");
