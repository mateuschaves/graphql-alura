const { ApolloServer, gql } = require('apollo-server');

const users = [
    {
        nome: 'Mateus',
        ativo: true,
    },
    {
        nome: 'Ana',
        ativo: false,
    }
]

const typeDefs = gql`
    type User {
        nome: String!
        ativo: Boolean!
        email: String
    }
`

const server = new ApolloServer({ typeDefs, });