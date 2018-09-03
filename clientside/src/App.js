import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';

import NavBar from './Components/Navbar';
import ShoppingList from './Components/ShoppingList';
import ModalText from './Components/ModalText';

import { Provider } from 'react-redux';
import store from './store.js';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	      <div className="App">
	        <NavBar />
	        <Container>
		        <ShoppingList/>
		        <ModalText />
	       	</Container>
	      </div>
	    </Provider>
    );
  }
}

export default App;
