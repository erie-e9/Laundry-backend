import GraphQLDate from 'graphql-date'
import AnalyticsResolvers from './analytics-resolvers';
import BranchofficesResolvers from './branchoffices-resolvers';
import ClientsResolvers from './clients-resolvers';
import EmployeesResolvers from './employees-resolvers';
import OrdersResolvers from './orders-resolvers';
import ServicesResolvers from './services-resolvers';

export default {
    Date: GraphQLDate,
    Query: {
        getAnalytics: AnalyticsResolvers.getAnalytics,
        getAnalytic: AnalyticsResolvers.getAnalytic,

        getBranchoffices: BranchofficesResolvers.getBranchoffices,
        getBranchoffice: BranchofficesResolvers.getBranchoffice,

        getClients: ClientsResolvers.getClients,
        getClient: ClientsResolvers.getClient,

        getEmployees: EmployeesResolvers.getEmployees,
        getEmployee: EmployeesResolvers.getEmployee,

        getOrders: OrdersResolvers.getOrders,
        getOrder: OrdersResolvers.getOrder,

        getServices: ServicesResolvers.getServices,
        getService: ServicesResolvers.getService,
    },
    Mutation: {
        createAnalytic: AnalyticsResolvers.createAnalytic,
        updateAnalytic: AnalyticsResolvers.updateAnalytic,
        deleteAnalytic: AnalyticsResolvers.deleteAnalytic,

        createBranchoffice: BranchofficesResolvers.createBranchoffice,
        updateBranchoffice: BranchofficesResolvers.updateBranchoffice,
        deleteBranchoffice: BranchofficesResolvers.deleteBranchoffice,

        createClient: ClientsResolvers.createClient,
        updateClient: ClientsResolvers.updateClient,
        deleteClient: ClientsResolvers.deleteClient,

        createEmployee: EmployeesResolvers.createEmployee,
        updateEmployee: EmployeesResolvers.updateEmployee,
        deleteEmployee: EmployeesResolvers.deleteEmployee,

        createOrder: OrdersResolvers.createOrder,
        updateOrder: OrdersResolvers.updateOrder,
        deleteOrder: OrdersResolvers.deleteOrder,

        createService: ServicesResolvers.createService,
        updateService: ServicesResolvers.updateService,
        deleteService: ServicesResolvers.deleteService
    }
}