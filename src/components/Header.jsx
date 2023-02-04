import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-w-max h-screen bg-[#000000a9] p-4">
      <Link to="/friends">Friends</Link>
      <Link to="/nitro">Nitro</Link>
      <Link to="/message">Message Request</Link>
    </div>
  );
};

export default Home;
