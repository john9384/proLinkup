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
import "./App.scss";
import NotFound from "./components/Layouts/NotFound/NotFound";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import SignUp from "./components/Pages/Signup/SignUp";
import Login from "./components/Pages/Login/Login";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import CreateProfile from "./components/Pages/CreateProfile/CreateProfile";
import EditProfile from "./components/Pages/EditProfile/EditProfile";
import AddExp from "./components/Pages/AddCred/AddExp";
import AddEdu from "./components/Pages/AddCred/AddEdu";
import BasicProfiles from "./components/Pages/Profiles/BasicProfiles";
import Profile from "./components/Pages/Profile/Profile";
import Posts from "./components/Pages/Feeds/Posts";
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
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/sign_up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/profile/handle/:handle"
              component={Profile}
            />
            <PrivateRoute exact path="/profile/:user_id" component={Profile} />
            <PrivateRoute exact path="/pros" component={BasicProfiles} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/add-experience" component={AddExp} />
            <PrivateRoute exact path="/add-education" component={AddEdu} />
            <PrivateRoute exact path="/profiles" component={BasicProfiles} />
            <PrivateRoute exact path="/feeds" component={Posts} />
            <PrivateRoute exact path="/post/:id" component={Post} />
          </Switch>
          <Route exact path="/not-found" component={NotFound} />
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
//
