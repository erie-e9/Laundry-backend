import Employee from '../../models/employees';

export default {
    getEmployees: () => Employee.find({}).sort({ createdAt: -1 }),
    getEmployee: (_, { _id }) => Employee.findById(_id),
    createEmployee: (_, args) => Employee.create(args),
    updateEmployee: (_, { _id, ...rest }) => Employee.findByIdAndUpdate(_id, rest, { new: true }),
    deleteEmployee: async (_, { _id }) => {
        try {
            await Employee.findByIdAndRemove(_id);
            return {
                message: 'Employee deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}