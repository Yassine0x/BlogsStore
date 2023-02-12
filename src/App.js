import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './create';
import BlogDetails from './blogDetail';
function App() {
    return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </Router>
    );
  
}

export default App;
