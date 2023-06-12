const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutsModel = new Schema({
    id: {
        type: String,
        require: true,
    },
    name: { 
        type: String,
        require: true
    },
    mode: { 
        type: String,
        require: true
    }, 
    equipment: [{
        type: String,
        require: true
    }],
    exercises: [{
        type: String,
        require: true
    }],
    trainerTips: [{
        type: String,
        require: true
    }]
}, { timestamps: true }); 

const Workouts = mongoose.model('Workouts', workoutsModel);

module.exports = Workouts;
