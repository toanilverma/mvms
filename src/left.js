import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <i className="arrow" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;