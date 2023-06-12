const workoutService = require('../services/workoutSerivce');

const createNewWorkout = async (req, res) => {
    const { body: { name, mode, equipment, exercises, trainerTips } } = req;

    if (!name || !mode || !equipment || !exercises || !trainerTips) return;

    const newWorkout = { 
        name,
        mode,
        equipment,
        exercises,
        trainerTips
    }

    try {     
        const newCreatedWorkout = await workoutService.createNewWorkout(newWorkout);
        
        res.send({ status: 'OK', data: newCreatedWorkout });
    } catch (err) {
        res.send({ status: '400', data: 'Failed to create data' });
    }
}

const getAllWorkouts = async (req, res) => {
    try {
        const allWorkouts = await workoutService.getAllWorkouts();
        
        res.send({ status: '200', data: allWorkouts });
    } catch (err) {
        res.send({ status: '400', data: 'Failed to get workouts'});
    }
}

const getWorkoutById = async (req, res) => {
    const { params: { workoutId } } = req;

    try {
        const workout = await workoutService.getWorkoutById(workoutId);
        
        res.status(200).send({ status: '200', data: workout });
    } catch (err) {
        res.status(500).send({ status: '400', data: 'Failed to get workout'});
    }
}

const deleteWorkoutById = async (req, res) => {
    const { params: { workoutId } } = req;

    try {
        const deletedWorkout = await workoutService.deleteWorkoutById(workoutId);

        res.status(200).send({ status: 200, data: deletedWorkout })
    } catch (err) {
        res.status(500).send({ status: '400', data: 'Failed to delete workout'});
    }
}

const updateWorkoutById = async (req, res) => {
    const { params: { workoutId }, body : { name, mode, equipment, exercises, trainerTips }  } = req;
    
    if (!name || !mode || !equipment || !exercises || !trainerTips) return;

    const currentWorkout = { 
        id: workoutId,
        name,
        mode,
        equipment,
        exercises,
        trainerTips
    }

    try {
        const updatedWorkout = await workoutService.updateWorkoutById(workoutId, currentWorkout)

        res.status(200).send({ status: 200, data: updatedWorkout });
    } catch (err) { 
        res.status(500).send({ status: '400', data: 'Failed to update workout'});
    }
}

module.exports = {
    createNewWorkout,
    getAllWorkouts,
    getWorkoutById,
    deleteWorkoutById,
    updateWorkoutById
}