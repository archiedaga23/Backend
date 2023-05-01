const express = require('express');
const app = express();

const workoutRoute = require('./v1/routes/workoutRoute');

const PORT = 3000;

app.use('/api/v1/workouts', workoutRoute);

app.listen(PORT, () => {
    console.log(`Your server is now running on port ${PORT}`);
})