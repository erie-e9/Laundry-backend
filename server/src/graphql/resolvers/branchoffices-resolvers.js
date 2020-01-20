import Branchoffice from '../../models/branchoffices';

export default {
    getBranchoffices: () => Branchoffice.find({}).sort({ createdAt: -1 }),
    getBranchoffice: (_, { _id }) => Branchoffice.findById(_id),
    createBranchoffice: (_, args) => Branchoffice.create(args),
    updateBranchoffice: (_, { _id, ...rest }) => Branchoffice.findByIdAndUpdate(_id, rest, { new: true }),
    deleteBranchoffice: async (_, { _id }) => {
        try {
            await Branchoffice.findByIdAndRemove(_id);
            return {
                message: 'Branchoffice deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}