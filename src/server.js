const express = require('express');
const app = express();

const workoutRoutes = require('./v1/routes/workoutRoutes');

const PORT = 3000;

app.use('/api/v1/workouts', workoutRoutes);

app.listen(PORT, () => {
    console.log(`Your server is now running at port ${PORT}`);
})