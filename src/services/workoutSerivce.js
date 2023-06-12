const Workouts = require('../models/workoutsModel');
const { v4: uuid } = require('uuid'); 

const createNewWorkout = async (data) => {
    const workoutToInsert = {
        ...data,
        id: uuid(),
    }
    try {
        const newWorkout = await new Workouts(workoutToInsert);       
        
        const savedWorkout = await newWorkout.save();
        
        return savedWorkout;
    } catch (err) {
        return err;
    }
}

const getAllWorkouts = async () => {
    try {
        const workouts = await Workouts.find();
        
        return workouts;
    } catch (err) {
        return err;
    }
}

const getWorkoutById = async (id) => {
    try {
        const workout = await Workouts.findOne({ id });
        
        return workout;
    } catch (err) {
        return err;
    }
}

const updateWorkoutById = async (id, data) => {
    try {
        const updatedWorkout = await Workouts.findOneAndUpdate({ id }, data, { new: true });
       
        return updatedWorkout;  
    } catch (err) {
        return err;
    }

}

const deleteWorkoutById = async (id) => {
    try {
        const deletedWorkout = await Workouts.findOneAndDelete({ id });

        return deletedWorkout;
    } catch (err) {
        return err;
    }
}

module.exports = { 
    createNewWorkout,
    getAllWorkouts,
    getWorkoutById,
    deleteWorkoutById,
    updateWorkoutById
}