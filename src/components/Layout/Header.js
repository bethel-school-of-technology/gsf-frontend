import React, { Component } from 'react';
import { Navbar, NavItem} from 'react-materialize';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';



// This is a Header component for Navigation //

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.clearCurrentProfile();
  }
  render() {

    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <div className="container-header">
        <div className="header">
          <NavItem href='/authlanding' >Home</NavItem>
          <NavItem href='/contact'>Meet The Team</NavItem>
          <NavItem href='/about'>About</NavItem>
          <NavItem href='/feed'>Events</NavItem>
          <NavItem className="logout" 
          href='/' 
          onClick={this.onLogoutClick.bind(this)} >Logout</NavItem>


        </div>
      </div>
    );

    const guestLinks = (
      <div>
        <div className="header">
          <NavItem href='/' >Home</NavItem>
          <NavItem href='/about'>About</NavItem>
          <NavItem href='/contact'>Meet The Team</NavItem>
          <NavItem href='/login'>Login</NavItem>
          <NavItem href='/signup'>Signup</NavItem>
        </div>
      </div>
    );


    return (
      <div>
        <Navbar className="bg-dark text-white" brand='Genesis Strength and Fitness' right>
          {isAuthenticated ? authLinks : guestLinks}
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Header);
