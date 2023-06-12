const express = require("express");
const router = express.Router();

const workoutController = require('../../controllers/workoutController');

router
    .post('/', workoutController.createNewWorkout)
    .get('/', workoutController.getAllWorkouts)
    .get('/:workoutId', workoutController.getWorkoutById)
    .delete('/:workoutId',workoutController.deleteWorkoutById)
    .put('/:workoutId', workoutController.updateWorkoutById)

module.exports = router;