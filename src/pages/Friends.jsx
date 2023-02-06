import React, { useState } from "react";
import Head from "../components/UI/Head";
import AllFriends from "../components/Friends/AllFriends";
import BlockFriends from "../components/Friends/BlockedFriends";
import OnlineFriends from "../components/Friends/OnlineFriends";
import PendingFriends from "../components/Friends/PendingFriends";
import AddFriends from "../components/Friends/AddFriends";

const Friends = () => {
  const [display, setDisplay] = useState(<OnlineFriends />);
  return (
    <div className="w-full sm:ml-[11rem]">
      <Head>
        <div className="flex items-center">
          <h1 className=" text-white w-min border-r-2 pr-2 border-white">
            Frineds
          </h1>
          <div className="flex sm:pl-3  sm:w-[30%] w-full  justify-evenly  ">
            <button
              className="cursor-pointer"
              onClick={() => setDisplay(<OnlineFriends />)}
            >
              online
            </button>
            <button
              className="cursor-pointer"
              onClick={() => setDisplay(<AllFriends />)}
            >
              All
            </button>
            <button
              className="cursor-pointer"
              onClick={() => setDisplay(<PendingFriends />)}
            >
              Pending
            </button>
            <button
              className="cursor-pointer hidden sm:block"
              onClick={() => setDisplay(<BlockFriends />)}
            >
              Blocked
            </button>
            <button
              className="hidden bg-green-600 p-1 rounded-sm cursor-pointer sm:block"
              onClick={() => setDisplay(<AddFriends />)}
            >
              Add Friend
            </button>
          </div>
        </div>
      </Head>
      <div className="h-screen grid place-content-center">{display}</div>
    </div>
  );
};

export default Friends;
