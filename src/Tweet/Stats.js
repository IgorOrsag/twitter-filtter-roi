import React from 'react';
import { Modal } from 'react-bootstrap';

export const Stats = ({ show, handleHide }) => {
  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Stats</Modal.Title>
      </Modal.Header>
      <Modal.Body>stats</Modal.Body>
    </Modal>
  );
};
