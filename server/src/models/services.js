import mongoose, { Schema } from 'mongoose';

const ServiceSchema = new Schema({
    sidgarment: {
        type: Number,
        required: 'Service ID garment is required',
        unique: true,
    },
    sidservice: {
        type: Number,
        required: 'Service ID service is required',
        unique: true,
    },
    sname: {
        type: String,
        required: 'Service name is required',
        unique: true,
        minlength: [5, 'Service name need to be longer'],
        maxlength: [30, 'Service name is very longer']
    },
    sgarmentnameunity: {
        type: String,
        required: 'Service garment name unity is required',
        unique: true,
        minlength: [5, 'Service garment name need to be longer'],
        maxlength: [30, 'Service garment name is very longer']
    },
    scost: {
        type: Number,
        required: 'Service cost is required'
    },
    sdiscount: {
        type: Number,
        required: 'Service discount is required'
    }
}, { timestamps: true });

export default mongoose.model('Service', ServiceSchema);
