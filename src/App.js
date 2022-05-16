import "./globalstyles.css";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   HttpLink,
//   from
// } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`Graphql error ${message}`);
//     });
//   }
// });
// const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000/" })]);
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link
// });

export default function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}
