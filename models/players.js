const mongoose = require('mongoose');

// Define the cricket player schema
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    jerseyNumber: {
        type: Number,
        required: true
    },
    careerStats: {
        matches: {
            type: Number,
            required: true
        },
        runs: {
            type: Number,
            required: true
        },
        wickets: {
            type: Number,
            required: true
        },
        centuries: {
            type: Number,
            required: true
        },
        halfCenturies: {
            type: Number,
            required: true
        }
    },
    notableAchievements: {
        type: [String],
        required: true
    },
    location: {
        city: {
            type: String,
            required: true
        },
        stadium: {
            type: String,
            required: true
        }
    }
});

// Model for Cricket Player
const CricketPlayer = mongoose.model('CricketPlayer', playerSchema);
module.exports =  CricketPlayer;
