import React from 'react';
import './style.scss';

const Loading = () => {
  return (
    <progress
      className="progress is-large is-danger"
      max="100"
      style={{ position: 'fixed', bottom: 0 }}
    >
      60%
    </progress>
  );
};

export default Loading;
