import React from "react";

function WorkImage(props) {
  return (
    <div className="flex-23">
      <img className="flexible-img" src={props.src} alt={props.alt} />
    </div>
  );
}

export default WorkImage;
