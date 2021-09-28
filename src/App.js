import React, { useState, useRef, useEffect } from 'react'
import './styles/Navbar.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Projects from './pages/Projects';
import Knowledge from './pages/Knowledge';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const [padding, setPadding] = useState(0)
  const [offset, setOffset] = useState(0);
  const heightRef = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
      setPadding(heightRef.current.clientHeight)
    }
  }, []);


  return (
    <div className="App">
      <Router>
        <Navbar heightRef={heightRef} offset={offset} />
        <div className="body-container" style={offset > 250 ? { paddingTop: padding } : { paddingTop: 0 }}>
          <Switch>
            <Route exact path="/dewick">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/knowledge">
              <Knowledge />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
