import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col min-w-[11rem] h-full bg-[#000000a9] p-4">
      <Link to="/friends">Friends</Link>
      <Link to="/nitro">Nitro</Link>
      <Link to="/message">Message Request</Link>
    </div>
  );
};

export default Home;
