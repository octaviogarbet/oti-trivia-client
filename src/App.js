import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Player from "./pages/player";
import Host from "./pages/host";
import Join from "./pages/join";
import NewGame from "./pages/new-game";
import Game from "./pages/game";

function App() {
  return (
    <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/game/:gameId">
            <Game />
          </Route>
          <Route path="/join/:gameId">
            <Join />
          </Route>
          <Route path="/secrethost/:gameId">
            <Host />
          </Route>
          <Route path="/player/:gameId">
            <Player />
          </Route>
          <Route path="/">
            <NewGame />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
