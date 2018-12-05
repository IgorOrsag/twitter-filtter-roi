import React from 'react';
import { Modal } from 'react-bootstrap';

const BasicStat = ({ label, value }) => (
  <div className="tweet-footer">
    <label>{label}</label>
    <div>{value}</div>
  </div>
);

export const Stats = ({
  show,
  handleHide,
  likesSum,
  likesPerTweet,
  mentions
}) => {
  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Stats</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BasicStat {...likesSum} />
        <BasicStat {...likesPerTweet} />
        <div>all mentions in tweets with number of unique occurences</div>
      </Modal.Body>
    </Modal>
  );
};
