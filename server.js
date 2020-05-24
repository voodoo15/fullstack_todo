import express from 'express';
import bodyParser from 'body-parser';
import {
    graphqlExpress,
    graphiqlExpress
} from 'apollo-server-express';
import schema from './schema.js';
const server = express();
const port = 4000;


server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}));

server.listen(port, () => {
    console.log(`listening on port ${ port }`);
});