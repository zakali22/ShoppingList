import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavBar extends Component {
 	state = {
 		isOpen: false
 	}

	toggle() {
	  	this.setState({
	      isOpen: !this.state.isOpen
	    });
	}
	
	render() {
	    return (
	      <div>
	        <Navbar className="mb-5" color="light" light expand="md">
	          <NavbarBrand href="/">ShoppingList</NavbarBrand>
	          <NavbarToggler onClick={this.toggle} />
	          <Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="ml-auto" navbar>
	              <NavItem>
	                <NavLink href="https://github.com/zakali22">GitHub</NavLink>
	              </NavItem>
				</Nav>
	          </Collapse>
	        </Navbar>
	      </div>
	    );
	  }
}

export default NavBar;