import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import FindDoctor from './pages/FindDoctor';
import Apps from './pages/Apps';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Testimonials' component={Testimonials} />
          <Route path='/finddoctor' component={FindDoctor} />
          <Route path='/apps' component={Apps} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
