import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";

const Home = () => {
  const [classes, setClasses] = useState("hidden");
  return (
    <>
      <GrMenu
        className={`fixed  text-[2rem] sm:hidden z-50 right-0 `}
        onClick={() => {
          classes === "flex" ? setClasses("hidden") : setClasses("flex");
        }}
      />
      <div
        className={` ${classes} sm:fixed top-0 left-0 sm:flex flex-col min-w-[11rem] h-screen bg-[#000] p-4 z-50`}
        onClick={() => setClasses("hidden")}
      >
        <Link to="/friends" className="text-white">
          Friends
        </Link>
        <Link to="/nitro" className="text-white">
          Nitro
        </Link>
        <Link to="/message" className="text-white">
          Message Request
        </Link>
      </div>
    </>
  );
};

export default Home;
