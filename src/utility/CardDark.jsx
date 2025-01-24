import React from 'react';

function CardDark({ header, title, text }) {
  return (
    <div className="card text-bg-dark mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default CardDark;
