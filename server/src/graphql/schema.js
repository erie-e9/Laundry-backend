export default `
    scalar Date

    type Status {
        message: String!
    }

    type Analytic {
        _id: ID!
        atext: String!
    }

    type Branchoffice {
        _id: ID!
        bothumbnail: String!
        boname: String!
        boemail: String!
        bophone: String!
        bocellphone: String!
        boworkhours: String!
        boactive: String!
        bogeolocation: String!
        boaddress: String!
        bocountry: String!
        bostate: String!
        bocity: String!
        bostreet: String!
        bozip: String!
        bourl: String!
        bofacebook: String!
        botwitter: String!
        boinstagram: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Client {
        _id: ID!
        cusername: String!
        cphone: String!
        ccellphone: String!
        cemail: String!
        cpassword: String!
        cavatar: String!
        cfirstname: String!
        clastname: String!
        cbirthdate: String!
        cgender: String!
        clastpurchase: String!
        ccountry: String!
        cstate: String!
        ccity: String!
        cstreet: String!
        czip: Int!
        cgeolocation: String!
        cemailverified: String!
        cactive: String!
        cverificationcode: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Employee {
        _id: ID!
        idbranchoffice: Int!
        eusername: String!
        ephone: String!
        ecellphone: String!
        eemail: String!
        epassword: String!
        eturn: String!
        eavatar: String!
        efirstname: String!
        elastname: String!
        ebirthdate: String!
        egender: String!
        erol: String!
        eactive: String!
        efamref1: String!
        efamref2: String!
        eworkref1: String!
        eworkref2: String!
        eworkdate: String!
        esalary: String!
        ecurp: String!
        erfc: String!
        eimss: String!
        etypecontract: String!
        ecountry: String!
        estate: String!
        ecity: String!
        estreet: String!
        ezip: Int!
        egeolacation: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Order {
        _id: ID!
        idclient: Int!
        idbranchoffice: Int!
        ototalprice: Int!
        odirectiondelivery: String!
        opaid: String!
        opaidform: String!
        ostatus: String!
        odate: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Service {
        _id: ID!
        sidgarment: Int!
        sidservice: Int!
        sname: String!
        sgarmentnameunity: String!
        scost: Int!
        sdiscount: Int!
        createdAt: Date!
        updatedAt: Date!
    }

    type Query {
        getAnalytics: [Analytic]
        getAnalytic(_id: ID!): Analytic

        getBranchoffices: [Branchoffice]
        getBranchoffice(_id: ID!): Branchoffice

        getClients: [Client]
        getClient(_id: ID!): Client

        getEmployees: [Employee]
        getEmployee(_id: ID!): Employee

        getOrders: [Order]
        getOrder(_id: ID!): Order

        getServices: [Service]
        getService(_id: ID!): Service
    }

    type Mutation {
        createAnalytic(atext: String!): Analytic
        updateAnalytic(_id: ID!, atext: String!): Analytic
        deleteAnalytic(_id: ID!): Status

        createBranchoffice(
            bothumbnail: String!,
            boname: String!,
            boemail: String!,
            bophone: String!,
            bocellphone: String!
            boworkhours: String!,
            boactive: String!,
            bogeolocation: String!,
            boaddress: String!,
            bocountry: String!,
            bostate: String!,
            bocity: String!,
            bostreet: String!,
            bozip: String!,
            bourl: String!,
            bofacebook: String!,
            botwitter: String!,
            boinstagram: String!): Branchoffice
        updateBranchoffice(
            _id: ID!, 
            bothumbnail: String!,
            boname: String!,
            boemail: String!,
            bophone: String!,
            bocellphone: String!
            boworkhours: String!,
            boactive: String!,
            bogeolocation: String!,
            boaddress: String!,
            bocountry: String!,
            bostate: String!,
            bocity: String!,
            bostreet: String!,
            bozip: String!,
            bourl: String!,
            bofacebook: String!,
            botwitter: String!,
            boinstagram: String!): Branchoffice
        deleteBranchoffice(_id: ID!): Status
        
        createClient(
            cusername: String!,
            cphone: String!,
            ccellphone: String!,
            cemail: String!,
            cpassword: String!,
            cavatar: String!,
            cfirstname: String!,
            clastname: String!,
            cbirthdate: String!,
            cgender: String!,
            clastpurchase: String!,
            ccountry: String!,
            cstate: String!,
            ccity: String!,
            cstreet: String!,
            czip: Int!,
            cgeolocation: String!,
            cemailverified: String!,
            cactive: String!,
            cverificationcode: String!): Client
        updateClient(
            _id: ID!,
            cusername: String!,
            cphone: String!,
            ccellphone: String!,
            cemail: String!,
            cpassword: String!,
            cavatar: String!,
            cfirstname: String!,
            clastname: String!,
            cbirthdate: String!,
            cgender: String!,
            clastpurchase: String!,
            ccountry: String!,
            cstate: String!,
            ccity: String!,
            cstreet: String!,
            czip: Int!,
            cgeolocation: String!,
            cemailverified: String!,
            cactive: String!,
            cverificationcode: String!): Client 
        deleteClient(_id: ID!): Status

        createEmployee(
            idbranchoffice: Int!,
            eusername: String!,
            ephone: String!,
            ecellphone: String!,
            eemail: String!,
            epassword: String!,
            eturn: String!,
            eavatar: String!,
            efirstname: String!,
            elastname: String!,
            ebirthdate: String!,
            egender: String!,
            erol: String!,
            eactive: String!,
            efamref1: String!,
            efamref2: String!,
            eworkref1: String!,
            eworkref2: String!,
            eworkdate: String!,
            esalary: String!,
            ecurp: String!,
            erfc: String!,
            eimss: String!,
            etypecontract: String!,
            ecountry: String!,
            estate: String!,
            ecity: String!,
            estreet: String!,
            ezip: Int!,
            egeolacation: String!): Employee
        updateEmployee(
            _id: ID!,
            idbranchoffice: Int!,
            eusername: String!,
            ephone: String!,
            ecellphone: String!,
            eemail: String!,
            epassword: String!,
            eturn: String!,
            eavatar: String!,
            efirstname: String!,
            elastname: String!,
            ebirthdate: String!,
            egender: String!,
            erol: String!,
            eactive: String!,
            efamref1: String!,
            efamref2: String!,
            eworkref1: String!,
            eworkref2: String!,
            eworkdate: String!,
            esalary: String!,
            ecurp: String!,
            erfc: String!,
            eimss: String!,
            etypecontract: String!,
            ecountry: String!,
            estate: String!,
            ecity: String!,
            estreet: String!,
            ezip: Int!,
            egeolacation: String!): Employee 
        deleteEmployee(_id: ID!): Status

        createOrder(
            idclient: Int!,
            idbranchoffice: Int!,
            ototalprice: Int!,
            odirectiondelivery: String!,
            opaid: String!,
            opaidform: String!,
            ostatus: String!,
            odate: String!
        ): Order
        updateOrder(
            _id: ID!,
            idclient: Int!,
            idbranchoffice: Int!,
            ototalprice: Int!,
            odirectiondelivery: String!,
            opaid: String!,
            opaidform: String!,
            ostatus: String!,
            odate: String!): Order
        deleteOrder(_id: ID!): Status
        
        createService(
            sidgarment: Int!,
            sidservice: Int!,
            sname: String!,
            sgarmentnameunity: String!,
            scost: Int!,
            sdiscount: Int!): Service
        updateService(
            _id: ID!,
            sidgarment: Int!,
            sidservice: Int!,
            sname: String!,
            sgarmentnameunity: String!,
            scost: Int!,
            sdiscount: Int!): Service
        deleteService(_id: ID!): Status
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;