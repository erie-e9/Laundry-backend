import mongoose, { Schema } from 'mongoose';

const validators = require('mongoose-validators');

const BranchofficeSchema = new Schema({
    bothumbnail: {
        type: String,
        required: 'Branch office thumbnail is required'
    },
    boname: {
        type: String,
        required: 'Branch office name is required',
        unique: true,
        maxlength: [50, 'Branch office name is very longer'],
        validate: [validators.isLength(2, 50)]
    },
    boemail: {
        type: String,
        required: 'Branch office email is required',
        unique: true,
        validate: validators.isEmail()
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Branch office email is incorrect type of email']
    },
    bophone: {
        type: String,
        required: 'Branch office phone is required',
        unique: true,
        validate: {
          validator(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: '{VALUE} is not a valid phone number'
        },
        minlength: [10, 'Branch office phone need to be longer'],
        maxlength: [15, 'Branch office phone is very longer']
    },
    bocellphone: {
        type: String,
        validate: {
          validator(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: '{VALUE} is not a valid cell phone number'
        },
        minlength: [10, 'Branch office cell phone need to be longer'],
        maxlength: [15, 'Branch office cell phone is very longer']
    },
    boworkhours: {
        type: String,
        required: 'Branch office workhours is required',
        minlength: [5, 'Branch office workhours need to be longer'],
        maxlength: [50, 'Branch office workhours is very longer']
    },
    boactive: {
        type: String,
        required: 'Branch office active is required',
        enum: ['active', 'no_active']
    },
    bogeolocation: {
        type: String,
        required: 'Branch office geolocation is required'
    },
    boaddress: {
        type: String,
        required: 'Branch office address is required'
    },
    bocountry: {
        type: String,
        required: 'Branch office country is required'
    },
    bostate: {
        type: String,
        required: 'Branch office state is required'
    },
    bocity: {
        type: String,
        required: 'Branch office city is required'
    },
    bostreet: {
        type: String,
        required: 'Branch office street is required'
    },
    bozip: {
        type: String,
        required: 'Branch office zip is required'
    },
    bourl: {
        type: String,
        validate: validators.isURL()
    },
    bofacebook: {
        type: String
    },
    botwitter: {
        type: String
    },
    boinstagram: {
        type: String
    }
}, { timestamps: true });

export default mongoose.model('Branchoffice', BranchofficeSchema);
