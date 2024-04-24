const Nav = () => {
  return (
    <nav id="menu">
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item mx-5">
          <Link to="/" className="nav-link" href="#">
            ALL
          </Link>
        </li>
        <li className="nav-item mx-5">
          <Link to="/fullstackdevelopment" className="nav-link" href="#">
            FULL STACK DEVELOPMENT
          </Link>
        </li>
        <li className="nav-item mx-5">
          <Link to="/datascience" className="nav-link" href="#">
            DATA SCIENCE
          </Link>
        </li>
        <li className="nav-item mx-5">
          <Link to="cybersecurity" className="nav-link" href="#">
            CYBER SECURITY
          </Link>
        </li>
        <li className="nav-item mx-5">
          <Link to="career" className="nav-link" href="#">
            CAREER
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;