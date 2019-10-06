import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../img/DtourLogo.png';
import { STATES } from 'mongoose';

console.log(logo);

class Header extends Component {
  renderContent(){
    switch(this.props.auth) {
       case null:
        return;
       case false:
         return <li><a href="/auth/google">Google Login</a></li>
       default: 
         return <li><a href="/api/logout">Logout</a></li>;
    } 
  }
    render () {
        return (
            <nav>
            <div className="nav-wrapper">
              <a img src={logo} alt="Logo" className="left brand-logo">Dtour</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                {this.renderContent()}
              </ul>
            </div>
          </nav>
        );
    }
  } 
    function mapStateToProps({ auth }) {
      return { auth };
      
    }

export default connect(mapStateToProps)(Header); 