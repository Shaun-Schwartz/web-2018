import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


Modal.setAppElement('#root')
class Enter extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div>
        <Modal
          closeTimeoutMS={2000}
          className="popup-modal"
          isOpen={this.props.openModel}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          contentLabel="Subscribe Modal">

          <h2
            className="modal-subtitle"
            ref={subtitle => this.subtitle = subtitle}>
            Subscribe
          </h2>
          <form>
            <input class="email-input" type="email"></input>
            <button className="subscribe-button"onClick={this.closeModal}>Submit</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Enter;
