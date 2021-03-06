const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    flag_author_type: ["student", "teacher"],
    isPublic: Boolean,
    data: String
});

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;