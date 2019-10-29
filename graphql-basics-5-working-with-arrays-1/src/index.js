import { GraphQLServer } from "graphql-yoga";

// Type Definitions
const typeDefs = `
    type Query {
        greeting(name: String, position: String): String!
        add(a: Float!, b: Float!): Float!
        grades: [Int!]!
        me: User
        post: Post!
    }
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`;

// Resolvers
const resolvers = {
  Query: {
    greeting(parent, args, cxt, info) {
      if (args.name && args.position)
        return `Hello, ${args.name} in ${args.position}`;
      return args.name;
    },
    addTogether(parent, args, cxt, info) {
      if (args.a && args.b) return `Equals: ${args.a + args.b}`;
      return "Arguments were missing";
    },
    grades(parent, args, ctx, info) {
      return [90, 80, 30];
    },
    me() {
      return {
        id: "1",
        name: "Bob",
        email: "bob@b.com",
        age: 20
      };
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

// By default serves on port 4000.
server.start(() => {
  console.log("Server is alive");
});
