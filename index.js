const express = require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://localhost/namaste', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected successfully');
        // Start your Express server or perform other operations that rely on the database connection
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/namaste');
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error(error);
    }
}

connect();

//Home/Index Page
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

//User Registration
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({
        name,
        email,
        password,
    });

    user.save()
        .then(() => {
            res.status(201).json({ message: 'User registered successfully' });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Failed to register user' });
        });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
