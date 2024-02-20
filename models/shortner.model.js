const mongoose = require("mongoose");

const shortenerSchema = mongoose.Schema({
    shortId: {
        type: String,
        require: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        require: true,
    },
});

const shortModel = mongoose.model("short", shortenerSchema);

module.exports = { shortModel };
