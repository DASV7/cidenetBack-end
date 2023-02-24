const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    first_name: { type: String, required: true },
    second_name: { type: String, required: false },
    surname: { type: String, required: true },
    second_Surname: { type: String, required: false },
    country: { type: String, required: true },
    type_document: { type: String, required: true },
    number_document: { type: String, required: true },
    email: { type: String, required: true },
    area: { type: String, required: true },
    status: { type: Boolean, required: false },
    date_register: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("employees", employeeSchema);
