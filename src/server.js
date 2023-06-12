const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const url = 'mongodb://127.0.0.1:27017/training-application';
const workoutRoute = require('./v1/routes/workoutRoute');

const PORT = 3000;
const db = mongoose.connection;

mongoose
    .connect(url, { useNewUrlParser: true })
    .then(() => console.log(`Database Connected`))
    .catch(err => console.error(`Connecttion error: ${err}`))

app.use(bodyParser.json());
app.use('/api/v1/workouts', workoutRoute);

app.listen(PORT, () => {
    console.log(`Your server is now running on port ${PORT}`);
})