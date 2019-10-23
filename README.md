# graph_ql
Examples of Graphql via Udemy Course

GraphQl Playground when serving application:
http://localhost:4000/

General learnings about GraphQl:

Inside Resolvers, Query, [Method Name], the following args can be used:

[Method Name](parent, args, cxt, info){}

- Parent is handy when working with relational data
- Great information about the operations
- Args object of args provided
- Info TBC

Accepted Scaler Types in Type Definition:
String
Boolean 
Int
Float
ID (unique identifiers)

Notes:

`````

Type Definitions are similar to an Interface in OOP (Java, .Net, AS3 etc).
Acting as a contract between an entity and the information
it contacts, and what is required to be provided upon a graphql Query.

This example holds a very basic pattern with Query, however 
typeDefs can contain many items, e.g. User, ShoppingCartItems, Posts, Ratings

const typeDefs = `
    type Query {
        id: ID! // Explanation mark means this field is required
        name: String!
        age: Int!
        employed: Boolean!
        gpa: float // gpa is not required in this example
    }
`

Resolvers contain Queries that can be made to retrieve data.
Again this is the simplest version, that returns hard coded values.
Next we'll show some examples that uncover the functionality and value of using 
GraphQl.

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

Here is an example which is closer to the true implementation that would 
be used in an app.

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

Querying GraphQl:

Go to: http://localhost:4000/

From the playground paste in this query and it will return the static 
data stored inside the me() resolver.

query {
  me {
    id
    name
    email
    age
  }
}

Using Paramters with GraphQl:

query {
  greeting(name: "Jessy")
}

This parameter will be recieved by GraphQl inside the greeting resolver within the 
'args' object. 

Where the query will return "Jessy" if using the code in the example above.

````


