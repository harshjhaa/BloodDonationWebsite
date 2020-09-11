const mongoose = require('mongoose');
const config = require('config');
const dbURL = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
        console.log('Connected with online MongoDB');
    } catch (err) {
        console.log('Some error occured in connecting to online MongoDB');
        //exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;