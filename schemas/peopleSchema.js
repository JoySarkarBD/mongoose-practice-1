const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        minlength: 3,
        maxlength: 30,
        trim: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z]+$/.test(value);
            }
        }
    },
    isActive: {
        type: Boolean
    },
    registered: {
        type: Date,
        required: true
    },
    age: Number,
    company: {
        title: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            validate: {
                validator: function (value) {
                    return /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/.test(value);
                }
            }
        },
        phone: {
            type: Number,
            minlength: 15,
            maxlength: 15,
            unique: true,
            trim: true,
            required: true
        },
        location: {
            country: {
                type: String,
                required: false
            },
            address: {
                type: String,
                required: false
            }
        }
    },
    tags: [
        Number,
        String
    ], 
    isMarried: {
        type: Boolean,
        default: false
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        default: "Male"
    }
}, { timestamps: true });
  
module.exports = peopleSchema; 

/* const schema = new Schema({ _id: Number });
const Model = mongoose.model('Test', schema); */