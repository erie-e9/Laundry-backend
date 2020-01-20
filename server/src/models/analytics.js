import mongoose, { Schema } from 'mongoose';

const AnalyticSchema = new Schema({
    atext: {
        type: String,
        required: 'Analytic text is required'
    }
}, { timestamps: true });

export default mongoose.model('Analytic', AnalyticSchema);
