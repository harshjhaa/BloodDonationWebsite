const express = require('express');
const connectDB = require('./config/db')

const app = express();

//Connecting to database
connectDB();

app.use(express.json({ extend: false }));

app.get('/', (req, res) => {
    res.send("API is Running !");
});

//Defining Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/donor', require('./routes/api/donor'));
app.use('/api/reciever', require('./routes/api/reciever'));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server up at Port: ${PORT}`);
});
