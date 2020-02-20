const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const fs = require('fs');
const db = require('./db');

let port = 3000;

let schema = buildSchema(fs.readFileSync('./grapghql/schema.graphql', 'utf8'));

const root = {
    items: () => db.getItems(),
    item: ({id}) => db.getItemById(id),
    groups: () => db.getGroups(),
    group: ({id}) => db.getItemById(id),
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));