const mongoose = require('mongoose');

const peopleSchema = require("../schemas/peopleSchema");

const PeopleModel = mongoose.model('ActiveUser', peopleSchema);

module.exports = PeopleModel;