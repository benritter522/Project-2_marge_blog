const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    nickname:       { type: String, required: true },
    name:           { type: String, required: true },
    latinName:      { type: String, required: true },
    img:            { type: String, required: true },
    origin:         { type: String, required: true },
    description:    { type: String, required: true },
    hasFungusGnats: Boolean
});

// Plant singularized on purpose
module.exports = mongoose.model('Plant', plantSchema);