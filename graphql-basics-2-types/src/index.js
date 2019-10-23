import { GraphQLServer } from 'graphql-yoga';

// Accepted Scaler Types:
// String, 
// Boolean, 
// Int, 
// Float
// ID, (unique identifiers)

// Type Definitions
const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: float
    }
`

// Resolvers
const resolvers = {
    Query: {
        id() {
            return 323321
        },
        name() {
            return 'Nick'
        },
        age() {
            return 35
        },
        employed() {
            return true
        },
        gpa() {
            return null
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

// By default serves on port 4000.
server.start(() => {
    console.log('Server is alive');
})
