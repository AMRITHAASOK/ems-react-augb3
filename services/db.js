//Node + Mongodb connection
//1 import mongoose
const mongoose = require('mongoose');

//connection string
mongoose.connect('mongodb://localhost:27017/EMS-AUG-B3-23')

//Create a model
const employee = mongoose.model('employee',{
    id:String,
    name:String,
    age:String,
    designation:String,
    salary:String
})

module.exports={
    employee
}