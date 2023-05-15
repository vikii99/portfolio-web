import './App.scss';
import {Route, Routes} from 'react-router-dom'
import { Layout } from './Components/Layout/index';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
