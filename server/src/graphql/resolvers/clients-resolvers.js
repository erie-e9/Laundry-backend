import Client from '../../models/clients';

export default {
    getClients: () => Client.find({}).sort({ createdAt: -1 }),
    getClient: (_, { _id }) => Client.findById(_id),
    createClient: (_, args) => Client.create(args),
    updateClient: (_, {_id, ...rest }) => Client.findByIdAndUpdate(_id, rest, { new: true}),
    deleteClient: async (_, { _id }) => {
        try {
            await Client.findByIdAndRemove(_id);
            return {
                message: 'Client deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }}