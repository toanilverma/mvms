import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <i className="arrow" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;