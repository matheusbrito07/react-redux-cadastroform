import { Switch,Route } from 'react-router';
import Home from "./views/home";
import Dashboard from "./views/dashboard";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </div>
  );
}
export default App;
