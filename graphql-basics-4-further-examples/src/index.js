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
        greeting(name: String, position: String): String!
        addTogether(a: Float, b: Float): Float!
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
            if (args.name && args.position) return `Hello, ${args.name} in ${args.position}`;
            return args.name;
        },
        addTogether(parent, args, cxt, info) {
          if (args.a && args.b) return `Equals: ${args.a + args.b}`;
          return "Arguments were missing";
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
