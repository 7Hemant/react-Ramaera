import React from "react";
import Head from "../components/UI/Head";
import MessageRequest from "../components/MessageRequest/MessageRequest";
const MessageRequests = () => {
  return (
    <div className="w-full sm:ml-[11rem]">
      <Head>
        <h1 className="text-white">message Request</h1>
      </Head>
      <div className="h-screen grid place-content-center">
        <MessageRequest />
      </div>
    </div>
  );
};

export default MessageRequests;
