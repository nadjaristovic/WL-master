import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import { AuthContext } from '../../context/auth-context';
// import Button from '../UIElements/Button';
import './Header.css';
import logo from "../../../assets/logo.png"

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const authCtx = useContext(AuthContext);

  const clickHandler = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="header">
      <div>
        <Link onClick={clickHandler} className="brand" to="/">
          {/* <img src={logo} alt="wl-logo"/> */}
          <h3>WL</h3>
        </Link>
      </div>

      <Link onClick={clickHandler} className="toggleButton" to="">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </Link>
      {authCtx.isLoggedIn && (
        <div className={showLinks ? 'navigation' : 'hidden'}>
          <ul>
            <li>
              <Link
                onClick={clickHandler}
                className="navigationLink"
                to="/search"
              >
                <h3>Search</h3>
              </Link>
            </li>
            <li>
              <Link
                onClick={clickHandler}
                className="navigationLink"
                to={`/${authCtx.userId}/movies`}
              >
                <h3>My Movies</h3>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={authCtx.logout} className="navigationLink">
                <h3> Logout </h3>
              </Link>
            </li>
          </ul>
        </div>
      )}
      {!authCtx.isLoggedIn && (
        <div className={showLinks ? 'navigation' : 'hidden'}>
          <ul>
          <Link className="navigationLink" to="/auth">
            <h3>Login/Signup</h3>
          </Link>
          </ul>
          
        </div>
      )}
    </nav>
  );
};

export default Header;
