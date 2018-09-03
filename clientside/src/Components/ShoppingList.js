import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';

import Moment from 'react-moment';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import {connect} from 'react-redux';
import { get_items, add_item, delete_item } from '../actions';

class ShoppingList extends Component {
	
	componentDidMount(){
		this.props.get_items();
	}

	deleteItem = (id) => {
		console.log(id);
		this.props.delete_item(id);
	}


	render(){
		const {items} = this.props;

		return (
			<Container>
				{items.length === 0 ? <h1 className="text-center">No shopping list</h1> : ''}
				<ListGroup className="mb-3">
					<TransitionGroup className="shopping-list">
						
						{ items.map((item) => 
							<CSSTransition key={item._id} timeout={500} classNames="fade">
								<ListGroupItem>
									<Button 
										outline
										onClick={this.deleteItem.bind(this, item._id)}
										className="remove-btn"
					                    type="button"
					                    color="danger"
					                    size="sm"
					                >
										&times;
									</Button>
									{item.text}
									<span className="date"><Moment format="DD/MM/YYYY HH:mm">{item.date}</Moment></span>
								</ListGroupItem>
							</CSSTransition>
						)}
					</TransitionGroup>
				</ListGroup>
				
			</Container>
		)
	}
}



const mapStateToProps = (state) => {
	return {
		items: state.item.items
	}
}


export default connect(mapStateToProps, {get_items, delete_item, add_item})(ShoppingList);