import { gql, GraphQLClient } from "graphql-request";

const { HYGRAPH_ENDPOINT, HYGRAPH_DEV_AUTH_TOKEN } = process.env;
const hygraphClient = new GraphQLClient(HYGRAPH_ENDPOINT!, {
  headers: {
    authorization: `Bearer ${HYGRAPH_DEV_AUTH_TOKEN}`,
  },
});
export default hygraphClient;
export { gql };
