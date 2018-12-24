import React, { Component } from 'react';
import Modal from 'react-modal';
import Cookies from './cookies'

Modal.setAppElement('#root')
class Subscribe extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true,
      showCookies: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(){
    this.setState({modalIsOpen: false});
    setTimeout(() => this.setState({showCookies: true}), 2000)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Modal
          closeTimeoutMS={1000}
          className="popup-modal"
          isOpen={this.props.openModel && this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          contentLabel="Subscribe Modal">

          <h2
            className="modal-subtitle"
            ref={subtitle => this.subtitle = subtitle}>
            Subscribe
          </h2>
            <input className="email-input" type="email"></input>
            <button
              className="subscribe-button"
              onClick={this.closeModal}>
              Submit
            </button>
        </Modal>
        <Cookies show={this.state.showCookies}/>
      </div>
    );
  }
}

export default Subscribe;
