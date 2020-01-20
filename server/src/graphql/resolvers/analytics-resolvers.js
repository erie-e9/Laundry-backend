import Analytic from '../../models/analytics';

export default {
    getAnalytics: () => Analytic.find({}).sort({ createdAt: -1 }),
    getAnalytic: (_, { _id }) => Analytic.findById(_id),
    createAnalytic: (_, args) => Analytic.create(args),
    updateAnalytic: (_, { _id, ...rest }) => Analytic.findByIdAndUpdate(_id, rest, { new: true }),
    deleteAnalytic: async (_, { _id }) => {
        try {
            await Analytic.findByIdAndRemove(_id);
            return {
                message: 'Analytic deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}