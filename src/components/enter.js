import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Subscribe from './subscribe';

Modal.setAppElement('#root')
class Enter extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      subscribeModalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false, subscribeModalIsOpen: true});
  }
  render() {
    return (
      <div>
        <Modal
          closeTimeoutMS={1000}
          className="popup-modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          contentLabel="Welcome Modal">

          <h2
            className="modal-subtitle"
            ref={subtitle => this.subtitle = subtitle}>
            Welcome
          </h2>
          <button className="enter-button"onClick={this.closeModal}>Enter</button>
        </Modal>
        <Subscribe openModel={this.state.subscribeModalIsOpen}/>
      </div>
    );
  }
}

export default Enter;
