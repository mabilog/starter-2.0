import { gql, GraphQLClient } from "graphql-request";

const hygraphClient = new GraphQLClient(process.env.HYGRAPH_ENDPOINT!);
console.log("hygraph endpoint", process.env.HYGRAPH_ENDPOINT!);
export default hygraphClient;
export { gql };
