import React, { Children } from "react";

const Card = (props) => {
  return (
    <div className={` rounded-md p-4 m-4 ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
