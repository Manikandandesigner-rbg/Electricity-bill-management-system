const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Getdb = require("./db");
const CustomerModel = require("./models/customerDetails");
const AdminLogin = require("./models/AdminLogin");
const UserLogin = require("./models/userLogin");

Getdb();
const app = express();

app.use(express.json());
app.use(cors());

// Fetch all customer details
async function Getcustomer() {
  const data = await CustomerModel.find();
  return data;
}
async function Getadmin() {
  const data = await AdminLogin.find();
  return data;
}

app.get("/electricity/customer-details", async (req, res) => {
  const value = await Getcustomer();
  res.json(value);
});

app.get("/electricity/admin-details", async (req, res) => {
  const value = await Getadmin();
  res.json(value);
});

app.post('/login', async (req, res) => {
    try {
        const { c_id, password } = req.body;

        const user = await UserLogin.findOne({ c_id, password });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        res.json({ message: "Login successful", user });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
