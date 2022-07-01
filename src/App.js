import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import AnimeDetailPage from "./Pages/AnimeDetailPage/AnimeDetailPage";
import CollectionPage from "./Pages/CollectionPage/CollectionPage";
import CollectionDetailPage from "./Pages/CollectionDetailPage/CollectionDetailPage";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql.anilist.co/",
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>
          
          <Route path="/anime/:id/:detail" exact component={AnimeDetailPage} />
          <Route
            path="/collection/:id"
            exact
            component={CollectionDetailPage}
          />
          <div>
            <Navbar />
            <Route path="/" exact component={HomePage} />
            <Route path="/collection" exact component={CollectionPage} />
          </div>
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
