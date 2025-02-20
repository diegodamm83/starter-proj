import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid space-between">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top mr-3"
          />
          Bootstrap
        </a>
        <p>(Login ? {"oui"})</p>
      </div>
    </nav>
  );
};

export default Navbar;
