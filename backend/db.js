const mongoose = import("mongoose");

async function Getdb() {
    try {
        const connect = (await mongoose).connect('mongodb://127.0.0.1:27017/Electricity');
        console.log('connected to the database!!');
    } catch (error) {
        console.log('error conecting to the database');
    }
}
module.exports = Getdb;