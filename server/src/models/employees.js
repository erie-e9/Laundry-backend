import mongoose, { Schema } from 'mongoose';

const validators = require('mongoose-validators'); 

const EmployeeSchema = new Schema({
    idbranchoffice: {
        type: Number,
        required: 'Employee ID branchoffice is required',
        unique: true,
    },
    eusername: {
        type: String,
        required: 'Employee username is required',
        minlength: [3, 'Employee username need to be longer'],
        maxlength: [30, 'Employee username is very longer'],
        validate: validators.isLength(3, 30)
    },
    ephone: {
        type: String,
        required: 'Employee phone is required',
        unique: true,
        validate: {
          validator(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: '{VALUE} is not a valid phone number'
        },
        minlength: [10, 'Employee phone need to be longer'],
        maxlength: [15, 'Employee phone is very longer']
    },
    ecellphone: {
        type: String,
        required: 'Employee cellphone is required',
        unique: true,
        validate: {
          validator(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: '{VALUE} is not a valid cell phone number'
        },
        minlength: [10, 'Employee phone need to be longer'],
        maxlength: [15, 'Employee phone is very longer']
    },
    eemail: {
        type: String,
        required: 'Employee email is required',
        unique: true,
        validate: validators.isEmail()
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Employee email is incorrect type of email']
    },
    epassword: {
        type: String,
        required: 'Employee password is required',
        minlength: [10, 'Employee password need to be longer'],
        match: [/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,'Employee password is incorrect']
    },
    eturn: {
        type: String,
        required: 'Employee turn is required',
        enum: ['morning', 'evening']
    },
    eavatar: {
        type: String,
        required: 'Employee avatar is required'
    },
    efirstname: {
        type: String,
        required: 'Employee firstname is required',
        minlength: [3, 'Employee firstname need to be longer'],
        maxlength: [50, 'Employee firstname is very longer'],
        validate: [validators.isAlpha(), validators.isLength(3, 50)]
    },
    elastname: {
        type: String,
        required: 'Employee lastname is required',
        minlength: [3, 'Employee lastname need to be longer'],
        maxlength: [50, 'Employee lastname is very longer'],
        validate: [validators.isAlpha(), validators.isLength(3, 50)]
    },
    ebirthdate: {
        type: String,
        required: 'Employee birthdate is required',
        validate: validators.isDate()
    },
    egender: {
        type: String,
        required: 'Employee gender is required',
        enum: ['male', 'female'],
        validate: validators.isAlpha()
    },
    erol: {
        type: String,
        required: 'Employee rol is required',
        enum: ['employee', 'deliveryman', 'administrator', 'unemployed'],
        validate: validators.isAlpha()
    },
    eactive: {
        type: String,
        required: 'Employee active is required',
        enum: ['active', 'no_active']
    },
    efamref1: {
        type: String,
        required: 'Employee famref1 is required',
        minlength: [3, 'Employee famref1 need to be longer'],
        maxlength: [255, 'Employee famref1 is very longer']
    },
    efamref2: {
        type: String,
        required: 'Employee famref2 is required',
        minlength: [3, 'Employee famref2 need to be longer'],
        maxlength: [255, 'Employee famref2 is very longer']
    },
    eworkref1: {
        type: String,
        required: 'Employee workref1 is required',
        minlength: [3, 'Employee workref1 need to be longer'],
        maxlength: [255, 'Employee workref1 is very longer']
    },
    eworkref2: {
        type: String,
        required: 'Employee workref2 is required',
        minlength: [3, 'Employee workref2 need to be longer'],
        maxlength: [255, 'Employee workref2 is very longer']
    },
    eworkdate: {
        type: String,
        required: 'Employee workdate is required',
        validate: validators.isDate()
    },
    esalary: {
        type: String,
        required: 'Employee salary is required',
        minlength: [4, 'Employee salary need to be longer'],
        maxlength: [10, 'Employee salary is very longer'],
        validate: validators.isFloat()
    },
    ecurp: {
        type: String,
        required: 'Employee CURP is required',
        unique: true,
        minlength: [18, 'Employee CURP need to be longer'],
        maxlength : [18, 'Employee CURP is very longer'],
        match: [/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/,'Employee CURP is incorrect']
    },
    erfc: {
        type: String,
        required: 'Employee RFC is required',
        unique: true,
        minlength: [13, 'Employee RFC need to be longer'],
        maxlength : [13, 'Employee RFC is very longer'],
        match: [/^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$/,'Employee RFC is incorrect']
    },
    eimss: {
        type: String,
        required: 'Employee IMSS is required',
        unique: true,
        minlength: [11, 'Employee IMSS need to be longer'],
        maxlength : [11, 'Employee IMSS is very longer'],
        validate: validators.isNumeric()
    },
    etypecontract: {
        type: String,
        required: 'Employee type contract is required',
        enum: ['employee', 'payroll', 'fees', 'cash'],
        validate: validators.isAlpha()
    },
    ecountry: {
        type: String,
        required: 'Employee country is required'
    },
    estate: {
        type: String,
        required: 'Employee state is required'
    },
    ecity: {
        type: String,
        required: 'Employee city is required'
    },
    estreet: {
        type: String,
        required: 'Employee street is required'
    },
    ezip: {
        type: Number,
        required: 'Employee zip is required',
        min: [5, 'Employee zip need to be longer'],
        match: [/^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}?$/,'Employee zip is incorrect']
    },
    egeolocation: {
        type: String,
        required: 'Employee geolacation is required'
    }
}, { timestamps: true });

export default mongoose.model('Employee', EmployeeSchema);
