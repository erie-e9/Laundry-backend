import express from 'express';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mocks from './mocks';
import constants from './config/constants';
import './config/db';

const app = express();
const schema = makeExecutableSchema({
    typeDefs,  
    resolvers
})

app
    .use(bodyParser.json())
    .use('/graphiql', graphiqlExpress({
        endpointURL: constants.GRAPHQL_PATH
    }))
    .use(constants.GRAPHQL_PATH, graphqlExpress({
        schema
    }))

const graphiqlServer = createServer(app)

mocks().then(() => {
    graphiqlServer.listen(constants.PORT, err => {
        if(err){
            console.log(`Error running app:  ${err}`)
        }else{
            console.log(`App running on: localhost:${constants.PORT}/graphiql`);
        }
    })
})