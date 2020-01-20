import mongoose, { Schema } from 'mongoose';

const validators = require('mongoose-validators');

const OrderSchema = new Schema({
    idclient: {
        type: Number,
        required: 'Order ID client is required',
        unique: true
    },
    idbranchoffice: {
        type: Number,
        required: 'Order ID branchoffice is required',
        unique: true
    },
    ototalprice: {
        type: Number,
        required: 'Order total price is required',
        validate: validators.isFloat()
    },
    odirectiondelivery: {
        type: String,
        required: 'Order direction delivery is required',
        minlength: [10, 'Order direction delivery need to be longer'],
        maxlength: [255, 'Order direction delivery is very longer']
    },
    opaid: {
        type: String,
        required: 'Order paid is required',
        enum: ['upon-delivery', 'paid'],
        validate: validators.isAlpha()
    },
    opaidform: {
        type: String,
        required: 'Order paid form is required',
        enum: ['cash', 'credit_card'],
    },
    ostatus: {
        type: String,
        required: 'Order status is required',
        // enum: ['', '']
    },
    odate: {
        type: Date,
        required: 'Order date is required',
        validate: validators.isDate()
    }
}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);
