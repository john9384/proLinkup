import React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./helpers/setAuthToken";
import { setCurrentUser } from "./redux/actions/authActions";
import { logoutUser } from "./redux/actions/authActions";
import { clearCurrentUserProfile } from "./redux/actions/profileActions";

import PrivateRoute from "./helpers/PrivateRoute";

import store from "./redux/store";
import "./App.css";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import SignUp from "./components/Pages/Signup/SignUp";
import Login from "./components/Pages/Login/Login";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import CreateProfile from "./components/Pages/CreateProfile/CreateProfile";
import EditProfile from "./components/Pages/EditProfile/EditProfile";
import AddExp from "./components/Pages/AddCred/AddExp";
import AddEdu from "./components/Pages/AddCred/AddEdu";
import BasicProfiles from "./components/Pages/Profiles/BasicProfiles";
import NotFound from "./components/Layouts/NotFound/NotFound";
import Profile from "./components/Pages/Profile/Profile";
import Posts from "./components/Pages/Posts/Posts";
import Post from "./components/Pages/Post/Post";

try {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      store.dispatch(clearCurrentUserProfile());
      window.location.href = "./login";
    }
  }
} catch (err) {
  console.log(err);
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/sign_up" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile/handle/:handle" component={Profile} />
              <Route exact path="/profile/:user_id" component={Profile} />
              <Route exact path="/not-found" component={NotFound} />
              <Route exact path="/pros" component={BasicProfiles} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
                <PrivateRoute exact path="/add-experience" component={AddExp} />
                <PrivateRoute exact path="/add-education" component={AddEdu} />
                <PrivateRoute
                  exact
                  path="/profiles"
                  component={BasicProfiles}
                />
                <PrivateRoute exact path="/feeds" component={Posts} />
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
