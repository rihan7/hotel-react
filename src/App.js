import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import SingleRoom from './pages/SingleRoom/SingleRoom';
import Error from './pages/Error/Error';
import Navbar from './Component/Navbar/Navbar';
import ContactUs from './pages/ContactUs/ContactUs';
import Footer from './Component/Footer/Footer';

function App(props) {

  return (
    <div className="App" >
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route path="/contact-us" component={ContactUs} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
