import mongoose from 'mongoose';

const animalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    keeper: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

export default mongoose.model('animal', animalSchema)