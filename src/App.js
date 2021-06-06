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
import NotFound from "./components/Pages/Common/NotFound";
import LandingPage from "./components/Pages/Common/LandingPage";
import SignUp from "./components/Pages/Auth/SignUp";
import Login from "./components/Pages/Auth/Login";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import CreateProfile from "./components/Pages/ProfileForms/CreateProfile";
import EditProfile from "./components/Pages/ProfileForms/EditProfile";
import AddExp from "./components/Pages/ProfileForms/AddExp";
import AddEdu from "./components/Pages/ProfileForms/AddEdu";
import ProfilesList from "./components/Pages/ProfilesList/ProfilesList";
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
            <PrivateRoute exact path="/pros" component={ProfilesList} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute exact path="/add-experience" component={AddExp} />
            <PrivateRoute exact path="/add-education" component={AddEdu} />
            <PrivateRoute exact path="/profiles" component={ProfilesList} />
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
