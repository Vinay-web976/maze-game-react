import React from "react";

const Boxes = ({ boxes, selectedBox, onBoxClick, score }) => {
  return (
    <div className="row container box-row">
      {boxes ? (
        boxes.map((b) => (
          <div
            key={b}
            className={
              b === selectedBox ? "selected-box col-md-3 " : "box col-md-3 "
            }
            onClick={() => onBoxClick(b)}
          ></div>
        ))
      ) : (
        <h1>Your Score Is : {score}</h1>
      )}
    </div>
  );
};

export default Boxes;
