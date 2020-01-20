import Service from '../../models/services';

export default {
    getServices: () => Service.find({}).sort({ createdAt: -1 }),
    getService: (_, { _id }) => Service.findById(_id),
    createService: (_, args) => Service.create(args),
    updateService: (_, { _id, ...rest }) => Service.findByIdAndUpdate(_id, rest, { new: true }),
    deleteService: async (_, { _id }) => {
        try {
            await Service.findByIdAndRemove(_id);
            return {
                message: 'Service deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}