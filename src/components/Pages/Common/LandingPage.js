import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";

const LandingPage = (props) => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, [auth, props]);
  return (
    <div className="landing">
      <Header />
      <div className="container">
        <div className="animate__animated animate__fadeIn landing__main">
          <p className="landing__title"> Prolinkup </p>
          <p className="landing__note">
            Welcome to the social network for Pro 's.
          </p>
          <div className="u-margin-bottom-small">
            <Link to="/login" className="btn btn--pry">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
