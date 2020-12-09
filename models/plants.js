const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    // nickname:       { type: String, required: false },
    name:           { type: String, required: true },
    latinName:      { type: String, required: true },
    img:            { type: String, required: true }
    // orgin:          { type: String, required: false },
    // description:    { type: String, required: false },
    // hasFungusGnats: Boolean
});

// Plant singularized on purpose
module.exports = mongoose.model('Plant', plantSchema);