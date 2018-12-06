import React from 'react';
import { Modal } from 'react-bootstrap';
import { map } from 'lodash';

const BasicStat = ({ label, value }) => (
  <div className="tweet-footer">
    <label>{label}</label>
    <div>{value}</div>
  </div>
);

const ListStat = ({ label, value }) => (
  <div className="sort">
    <h4>{label}</h4>
    <div>
      {map(value, (val, index) => (
        <BasicStat label={index} value={val} />
      ))}
    </div>
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
        <div className="stats">
          <BasicStat {...likesSum} />
          <BasicStat {...likesPerTweet} />
          <ListStat {...mentions} />
        </div>
      </Modal.Body>
    </Modal>
  );
};
