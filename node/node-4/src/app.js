const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const fs = require('fs');
const path = require('path');
const db = require('./db');

let schema = buildSchema(fs.readFileSync(path.resolve(__dirname, 'grapghql/schema.graphql'), 'utf8'));

const root = {
    // Queries
    items: () => db.getItems(),
    item: ({ id }) => db.getItemById(id),
    groups: () => db.getGroups(),
    group: ({ id }) => db.getItemById(id),
    types: () => db.getTypes(),
    type: ({ id }) => db.getTypeById(id),

    // Mutations
    createItem: ({ input }) => db.createItem(input),
    updateItem: ({ id, input }) => db.updateItem(id, input),
    deleteItem: ({ id }) => db.deleteItem(id),
    createGroup: ({ input }) => db.createGroup(input),
    updateGroup: ({ id, input }) => db.updateGroup(id, input),
    deleteGroup: ({ id }) => db.deleteGroup(id),
    createType: ({ input }) => db.createType(input),
    updateType: ({ id, input }) => db.updateType(id, input),
    deleteType: ({ id }) => db.deleteType(id),
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

module.exports = app;