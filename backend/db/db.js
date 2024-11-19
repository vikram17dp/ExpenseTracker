const mongoos = require('mongoose');
const connectDB = async()=>{
    try {
        await mongoos.connect('mongodb+srv://vikramdp505:vikram2004@cluster0.wls7t.mongodb.net/Expense_Tracker')
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB