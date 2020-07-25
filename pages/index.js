import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import Launches from "../components/Launches";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

export default function Index() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1 className="text-white font-bold text-5xl leading-normal">SpaceX</h1>
        <br />
        <Launches />
      </div>
    </ApolloProvider>
  );
}
