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
        greeting(name: String): String!
        me: User
    }
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`

// Resolvers
const resolvers = {
    Query: {
        greeting(parent, args, cxt, info) {
            if (!args.name) return 'name argument missing';
            return args.name;
        },
        me() {
            return {
                id: "1",
                name: "Bob",
                email: "bob@b.com",
                age: 20 
            }
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