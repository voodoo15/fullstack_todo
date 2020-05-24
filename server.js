import express from 'express';
const bodyParser = require('body-parser');
const {
    graphqlExpress,
    graphiqlExpress
} = require('apollo-server-express');
const {
    makeExecutableSchema
} = require('graphql-tools');
const server = express();

server.use(
    '/graphiql',
    bodyParser.json(),
    graphiqlExpress({
        endpointURL: '/graphql',
    }),
);

server.use(
    '/graphql',
    graphqlExpress({})
);

server.listen(4000, () => {
    console.log('listening on port 4000');
});