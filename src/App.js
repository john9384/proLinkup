import React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import store from "./components/redux/store";
import "./App.css";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import SignUp from "./components/Pages/Signup/SignUp";
import Login from "./components/Pages/Login/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/sign_up" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
