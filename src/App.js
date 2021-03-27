import {Switch, Route} from "react-router-dom"

import Header from './components/header/Header'
import SingleMovie from "./pages/singleMovie/SingleMovie"
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/movie/:id" component={SingleMovie} exact/>
      </Switch>
    </>
  );
}

export default App;
