import Home from './pages/home';
import Characters from './pages/characters';
import Character from './pages/characterInfo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Rick-Morty/" component={Home} />
        <Route exact path="/Rick-Morty/characters" component={Characters} />
        <Route exact path="/Rick-Morty/:character" component={Character} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
