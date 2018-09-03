import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux';
import {add_item} from '../actions';


class ModalText extends React.Component {
  state = {
    modal: false,
    text: ''
  }


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  addItem = (e) => {
    e.preventDefault();
    const {text} = this.state;
    const newItem = {
      text
    }

    this.props.add_item(newItem);
    console.log(newItem);
    this.toggle();

  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Button className="mb-5 ml-3 btn-block" color="danger" onClick={this.toggle}>Add an item</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a shopping item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.addItem}>
              <FormGroup>
                <Label for="text">Add item</Label>
                <Input onChange={this.onChange} type="text" name="text" id="text" placeholder="Add a shopping item" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onClick={this.addItem} color="primary">Add Item</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


export default connect(null, {add_item})(ModalText);