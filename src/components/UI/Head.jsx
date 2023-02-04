import React from "react";

const Head = (props) => {
  return (
    <header className="fixed bg-[#000000af] p-2  w-full shadow-md">
      {props.children}
    </header>
  );
};

export default Head;
