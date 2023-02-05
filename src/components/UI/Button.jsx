import React from "react";

const Button = (props) => {
  return (
    <button className={`px-5 py-2 rounded-md w-[9rem]  ${props.className} m-4`}>
      {props.children}
    </button>
  );
};

export default Button;
