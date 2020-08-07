import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export class CustomModal extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a part</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.form}
                </Modal.Body>
            </Modal>
        )
    }
}