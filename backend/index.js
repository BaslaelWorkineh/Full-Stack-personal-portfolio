const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/contactModel')
const PORT = 5000
require('dotenv').config();
const blogRoutes = require('./routes/blogRoute');

const app = express()
app.use(express.json());
app.use(cors(
))

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Mongodb connection error happened"))
db.once('open', ()=>{
    console.log('Mongodb connected successfully')
})

app.use('/', blogRoutes);
app.get('/', (req, res)=>{
    res.json('Server is Running')
})

app.post('/submit-form', async (req, res) => {
    try {
        const { fname, lname, email, phoneno, service, message, date } = req.body;
        
        if (!fname || !lname || !email || !phoneno || !service || !message) {
            return res.status(400).json({ message: "Please enter all filled" });
        }

        // Create a new user instance using the User model
        const user = new User({
            fname,
            lname,
            email,
            phoneno,
            service,
            message,
            date
        });

        // Save the user to the database
        const savedUser = await user.save();

        // Respond with the saved user
        res.json(savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(PORT, ()=>{console.log(`Server started at ${PORT}`)})