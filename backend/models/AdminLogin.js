const mongoose = require('mongoose');

const adminLoginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const AdminLogin = mongoose.model('AdminLogin', adminLoginSchema,'adminlogins');

module.exports = AdminLogin;