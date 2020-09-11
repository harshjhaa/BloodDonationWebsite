const mongoose = require('mongoose')

const DonorSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    alergy: { type: String, required: true },
    location: { type: String, required: true }, 
})

module.exports = Donor = mongoose.model('donor', DonorSchema);