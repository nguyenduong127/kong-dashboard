import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Logo from './kong.png';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <HeaderLink className="navbar-brand" to="/">
              <img src={Logo} width="20" alt="Logo"/>
            </HeaderLink>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><HeaderLink to="/apis">APIs</HeaderLink></li>
              <li><HeaderLink to="/consumers">Consumers</HeaderLink></li>
              <li><HeaderLink to="/plugins">Plugins</HeaderLink></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/">Action</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="/">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </NavBar>
    );
  }
}

export default Header;
