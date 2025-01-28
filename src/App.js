import { BrowserRouter ,Route ,Routes } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import BlosList from './Components/BlogsList';

const App=()=>(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<BlosList />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
  
      <Route element={<NotFound />}></Route>

    </Routes>
  </BrowserRouter>
)


export default App;