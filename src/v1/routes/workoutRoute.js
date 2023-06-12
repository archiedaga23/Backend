const express = require("express");
const router = express.Router();

const workoutController = require('../../controllers/workoutController');

router
    .get('/:workoutId', workoutController.getWorkoutById)
    .get('/', workoutController.getAllWorkouts)
    .post('/', workoutController.createNewWorkout)
    .put('/:workoutId', workoutController.updateWorkoutById)
    .delete('/:workoutId',workoutController.deleteWorkoutById)

module.exports = router;