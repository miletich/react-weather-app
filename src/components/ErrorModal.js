import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ErrorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      me: "dule"
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({
      showModal: false
    });
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Error Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {this.props.message}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ErrorModal;
