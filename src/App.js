import { BrowserRouter ,Route ,Switch } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import BlosList from './Components/BlogsList';
import BlogItemDetails from './Components/BlogItemDeatls';

const App=()=>(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/"component={BlosList}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/blogs/:id" component={BlogItemDetails}></Route>
  
      <Route component={NotFound}></Route>

    </Switch>
  </BrowserRouter>
)


export default App;