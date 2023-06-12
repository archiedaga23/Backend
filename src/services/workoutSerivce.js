const Workouts = require('../models/workoutsModel');
const { v4: uuid } = require('uuid'); 

const getAllWorkouts = async () => {
    try {
        const workouts = await Workouts.find();
        
        return workouts;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        };
    }
}

const getWorkoutById = async (id) => {
    try {
        const isFoundWorkout = await Workouts.findOne({ id });

        if (!isFoundWorkout) {
            throw {
                status: 400,
                message: `No workout found with this workoutId ${id}`
            }
        }
        
        return isFoundWorkout;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        };
    }
}

const createNewWorkout = async (data) => {
    const workoutToInsert = {
        ...data,
        id: uuid(),
    }

    const { name } = data;

    try {
        const isAlreadyExist = await Workouts.findOne({ name });

        if (isAlreadyExist) 
            throw {
                status: 400,
                message: `Workout with the name '${name}' already exists`
            };

        const newWorkout = await new Workouts(workoutToInsert);       
        
        const savedWorkout = await newWorkout.save();
        
        return savedWorkout;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        };
    }
}

const updateWorkoutById = async (id, data) => {
    try {
        const isWorkoutFound = await Workouts.findOne({ id });

        if (!isWorkoutFound) {
            throw {
                status: 400,
                message: `No workoutfound with an id: ${id}`
            }
        }

        const updatedWorkout = await Workouts.findOneAndUpdate({ id }, data, { new: true });
       
        return updatedWorkout;  
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        };
    }

}

const deleteWorkoutById = async (id) => {
    try {
        const isWorkoutFound = await Workouts.findOne({ id });

        if (!isWorkoutFound) {
            throw { 
                status: 400,
                message: `Cant find workout with an ID: ${id}`
            };
        } 

        const deletedWorkout = await Workouts.findOneAndDelete({ id });

        return deletedWorkout;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        };
    }
}

module.exports = { 
   
    getAllWorkouts,
    getWorkoutById,
    createNewWorkout,
    updateWorkoutById,
    deleteWorkoutById    
}