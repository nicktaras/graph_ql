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
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return 'hello'
        },
        name() {
            return 'Nick'
        },
        location() {
            return 'Sydney Australia'
        },
        bio() {
            return 'A developer and electronics hobbyist that likes unhealthy food'
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

// example Query:
// query {
//     hello
// }