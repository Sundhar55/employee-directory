import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import OverView from './components/overview/overview';
import Home from './components/home/home';

function App() {
  return (
    // <div className="App">
    //   <Home></Home>
    //   <OverView></OverView>
    // </div>
    <Router>
      <div className="App">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/overview" >
          <OverView />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>

  );
}

export default App;
