import mongoose, { Schema } from 'mongoose';

const validators = require('mongoose-validators'); 

const ClientSchema = new Schema({
    cusername: {
        type: String,
        required: 'Client username is required',
        unique: true,
        minlength: [3, 'Client username need to be longer'],
        maxlength: [30, 'Client username is very longer'],
        validate: [validators.isAlphanumeric(), validators.isLength(3, 30)]
    },
    cphone: {
        type: String,
        required: 'Client phone is required',
        unique: true,
        validate: {
          validator(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: '{VALUE} is not a valid phone number'
        },
        minlength: [10, 'Client phone need to be longer'],
        maxlength: [15, 'Client phone is very longer']
    },
    ccellphone: {
        type: String,
        required: 'Client cellphone is required',
        unique: true,
        validate: {
          validator(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: '{VALUE} is not a valid cell phone number'
        },
        minlength: [10, 'Client phone need to be longer'],
        maxlength: [15, 'Client phone is very longer']
    },
    cemail: {
        type: String,
        required: 'Client email is required',
        unique: true,
        validate: validators.isEmail(),
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Client email is incorrect type of email']
    },
    cpassword: {
        type: String,
        required: 'Client password is required',
        minlength: [10, 'Client password need to be longer'],
        match: [/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,'Client password is incorrect']
    },
    cavatar: {
        type: String,
        required: 'Client avatar is required'
    },
    cfirstname: {
        type: String,
        required: 'Client firstname is required',
        minlength: [3, 'Client firstname need to be longer'],
        maxlength: [50, 'Client firstname is very longer'],
        validate: [validators.isAlpha(), validators.isLength(3, 50)]
    },
    clastname: {
        type: String,
        required: 'Client lastname is required',
        minlength: [3, 'Client lastname need to be longer'],
        maxlength: [50, 'Client lastname is very longer'],
        validate: [validators.isAlpha(), validators.isLength(3, 50)]
    },
    cbirthdate: {
        type: String,
        required: 'Client birthdate is required',
        validate: validators.isDate()
    },
    cgender: {
        type: String,
        required: 'Client gender is required',
        enum: ['male', 'female'],
        validate: validators.isAlpha()
    },
    clastpurchase: {
        type: String,
        required: 'Client lastpurchase is required',
        validate: validators.isDate()
    },
    ccountry: {
        type: String,
        required: 'Client country is required'
    },
    cstate: {
        type: String,
        required: 'Client state is required'
    },
    ccity: {
        type: String,
        required: 'Client city is required'
    },
    cstreet: {
        type: String,
        required: 'Client street is required'
    },
    czip: {
        type: Number,
        required: 'Client zip is required',
        min: [5, 'Client zip need to be longer'],
        match: [/^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}?$/,'Employee zip is incorrect']
    },
    cgeolocation: {
        type: String,
        required: 'Client geolocation is required'
    },
    cemailverified: {
        type: String,
        required: 'Client email verified is required',
        enum: ['verified', 'waiting'],
        validate: validators.isAlpha()
    },
    cactive: {
        type: String,
        required: 'Client active is required',
        enum: ['active', 'no_active']
    },
    cverificationcode: {
        type: String,
        required: 'Client verification code is required',
        enum: ['verified', 'waiting'],
        validate: validators.isAlpha()
    }
}, { timestamps: true });

export default mongoose.model('Client', ClientSchema);
