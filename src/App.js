import React, { Component } from 'react'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrwaer';
import Backdrop from './components/Backdrop/Backdrop';
import sideDrawer from './components/SideDrawer/SideDrwaer';
import backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Wine from './components/Wine/Wine';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import ThankYou from './components/ThankYou/Thankyou';
import Contact from './components/Contact/Contact';
import DatatablePage from './components/DataTable/DataTable';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Thankyou from './components/ThankYou/Thankyou';
import Blog from './components/Blog/Blog'


class App extends Component {
  state = {
    SideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen }
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.drawerToggleClickHandler} />
    }
    return (
      <BrowserRouter>
        <div style={{ height: '100%' }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.SideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route exact path="/" component={Home}>
              <Home />
            </Route>
            <Route path="/about" component={About}>
              <About />
            </Route>
            <Route path="/wine" component={Wine}>
              <Wine />
            </Route>
            <Route path="/blog" component={Blog}>
              <Blog />
            </Route>
            <Route path="/cart" component={Cart}>
              <Cart />
            </Route>
            <Route path="/checkout" component={Checkout}>
              <Checkout />
            </Route>
            <Route path="/thankyou" component={Thankyou}>
              <ThankYou />
            </Route>
            <Route path="/contact" component={Contact}>
              <Contact />
            </Route>
            <Route path="/DatatablePage" component={DatatablePage}>
              <DatatablePage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}


export default App