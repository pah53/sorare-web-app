const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get cards for the homepage grid"
    allCards (
      after: String
      before: String
      first: Int
      last: Int
    ): CardConnection!
  }

  "Gets information for the nodes field"
  type CardConnection {
    nodes: [Card!]!
  }

  "Returns the basic information about a card"
  type Card {
    id: ID!
    "The name of the player on the card"
    name: String!
    "The player's position"
    position: String!
    "The price of the card"
    price: String!
    "The rarity of the card"
    rarity: String!
    "Card picture URL"
    pictureUrl: String
  }
`;

module.exports = typeDefs;
