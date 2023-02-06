import React from "react";
import Head from "../components/UI/Head";

const Friends = () => {
  return (
    <div className="w-full sm:ml-[11rem]">
      <Head>
        <div className="flex items-center">
          <h1 className="text-white w-min border-r-2 pr-1 border-white">
            Frineds
          </h1>
          <ul className="flex pl-3  w-[30%] justify-evenly ">
            <li className="cursor-pointer">online</li>
            <li className="cursor-pointer">All</li>
            <li className="cursor-pointer">Pending</li>
            <li className="cursor-pointer">Blocked</li>
            <li className="bg-green-600 p-1 rounded-sm cursor-pointer">
              Add Friend
            </li>
          </ul>
        </div>
      </Head>
    </div>
  );
};

export default Friends;
