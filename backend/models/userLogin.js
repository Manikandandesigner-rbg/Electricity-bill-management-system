const mongoose = require('mongoose');

const UserLoginSchema = new mongoose.Schema({
    c_id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
});
module.exports = mongoose.model('UserLogin', UserLoginSchema);