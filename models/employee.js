const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
{
    
    title: String,
    givenName: String,
    middleInitial: String,
    surname: String,
    employeeID:  Number,
    occupation: String,
    username: String,
    local: String,
    state: String

})

module.exports = mongoose.model("Employee", EmployeeSchema);