const mongoose = require("mongoose");

const Employee = require("./models/employee")

mongoose.connect("mongodb://localhost:27017/transportationSystem", 
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () =>
{
    console.log("Database connected");
})


const employee = new Employee(
    {
        title: "Mrs.",
        givenName: "Shannon",
        middleInitial: "J",
        surname: "Walker",
        employeeID: 285080,
        occupation: "Railroad switch operator",
        username: "Huttly1989",
        local: "Midtown East",
        state: "NY"
    }
)

employee.save();

