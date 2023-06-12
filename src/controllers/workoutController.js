const workoutService = require('../services/workoutSerivce');

const getAllWorkouts = async (req, res) => {
    try {
        const allWorkouts = await workoutService.getAllWorkouts();
 
        res
          .status(200)
          .send({ 
            status: 'OK', 
            data: allWorkouts 
           });
    } catch (error) {
        res
          .status(error?.status || 500)
          .send({ 
            status: `FAILED`,
            data: {
                error: error?.message || error
            }
          });
    }
}

const getWorkoutById = async (req, res) => {
    const { params: { workoutId } } = req;

    if (!workoutId) {
        res
          .status(400)
          .send({
             status: `FAILED`,
             message: `Params ID cannot be empty: ${workoutId}.`
          });
    }

    try {
        const workout = await workoutService.getWorkoutById(workoutId);
        
        res
          .status(200)
          .send({ 
            status: `OK`, 
            data: workout 
          });
    } catch (error) {
        res
         .status(error?.status || 500)
         .send({ 
            status: `FAILED`, 
            data: {
                error: error?.message || error
            }
         });
    }
}

const createNewWorkout = async (req, res) => {
    const { body: { name, mode, equipment, exercises, trainerTips } } = req;

    if (!name || !mode || !equipment || !exercises || !trainerTips) {
        res
          .status(400)
          .send({ 
            status: 'FAILED', 
            data: { 
              error: 
                'One of the following keys is missing or is empty in request body: name, mode, equipment, exercises, trainerTips' 
            }})
    }

    const newWorkout = { 
        name,
        mode,
        equipment,
        exercises,
        trainerTips
    }

    try {     
        const newCreatedWorkout = await workoutService.createNewWorkout(newWorkout);
        
        res
          .status(201)
          .send({ 
            status: 'OK', 
            data: newCreatedWorkout 
          });
    } catch (error) {
        res
          .status(error?.status || 500)
          .send({ 
            status: 'FAILED', 
            data: {
                error: error?.message || error
            } 
         });
    }
}

const updateWorkoutById = async (req, res) => {
    const { params: { workoutId }, body : { name, mode, equipment, exercises, trainerTips }  } = req;
    
    if (!name || !mode || !equipment || !exercises || !trainerTips || !workoutId) {
        res
          .status(400)
          .send({
            status: `FAILED`,
            message: `One of the following keys is missing or is empty in request body: name, mode, equipment, exercises, trainerTips, workoutId`
          })
    }

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

        res
          .status(200)
          .send({ 
            status: 200, 
            data: updatedWorkout 
          });
    } catch (error) { 
        res
          .status(error.status || 500)
          .send({ 
            status: `FAILED`, 
            data: {
                status: error?.status || 500,
                message: error?.message || error
            }
           });  
    }
}

const deleteWorkoutById = async (req, res) => {
    const { params: { workoutId } } = req;

    if (!workoutId) {
        res
          .status(400)
          .send({
            status: `FAILED`,
            data: {
                error: error?.message || error
            }
          });
    }

    try {
        const deletedWorkout = await workoutService.deleteWorkoutById(workoutId);

        res
          .status(200)
          .send({ 
            status: 200, 
            data: deletedWorkout 
          })
    } catch (error) {
        res
          .status(error?.status || 500)
          .send({ 
            status: `FAILED`, 
            data: {
                error: error?.message || error
            }
        });
    }
}

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createNewWorkout,
    updateWorkoutById,
    deleteWorkoutById
}