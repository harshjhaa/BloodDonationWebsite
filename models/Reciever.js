const mongoose = require('mongoose')

const RecieverSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    organizaionName: { type: String, required: true },
    location: { type: String, required: true },
})

module.exports = Reciever = mongoose.model('reciever', RecieverSchema);