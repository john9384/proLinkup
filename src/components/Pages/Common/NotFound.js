import Header from "../../Layouts/Header";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="err-page">
        <h1 className="display-4">404 Page Not Found</h1>
        <p>oops!, page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
