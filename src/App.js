import "./globalstyles.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import LandingPage from "./pages/LandingPage";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({
    uri: "https://c3hxkk.sse.codesandbox.io/"
  })
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

export default function App() {
  return (
    <ApolloProvider client={client} className="App">
      <LandingPage />
    </ApolloProvider>
  );
}
