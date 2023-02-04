import React, { Children } from "react";

const Card = (props) => {
  return <div className=" rounded-md p-4">{props.children}</div>;
};

export default Card;
