const mongoose = require("mongoose");

const mongooseDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test', {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log("Mongooes connected....!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = mongooseDB;