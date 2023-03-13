import React, { useRef, useState, useEffect, useContext } from "react";
import { OptionsIcon } from "../../../assets/Icons";

function PostHeader({ postAuthor, postTime, singlePostCall }) {
  const walletAddressFormatter = (str) => {
    const begin = str.substring(0, 7);
    const end = str.slice(-4);
    return `${begin}****${end}`;
  };

  let time = "now";

  const getTimestamp = async () => {
    const date = new Date(postTime * 1000);
    const today = new Date();

    const diff = today - date;

    const seconds = Math.floor(diff / 1000);

    if (seconds < 60) {
      time = `${seconds} seconds ago`;
    } else if (seconds < 3600) {
      time = `${Math.floor(seconds / 60)} minutes ago`;
    } else if (seconds < 86400) {
      time = `${Math.floor(seconds / 3600)} hours ago`;
    } else {
      time = `${Math.floor(seconds / 86400)} days ago`;
    }
  };

  if (!singlePostCall) getTimestamp();

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex gap-[6px] items-center">
          <h2 className="font-semibold text-[#000000] text-[16px]">
            {walletAddressFormatter(postAuthor)}
          </h2>
          <div className="w-[5px] h-[5px] bg-[#999270] rounded"></div>
          <h2 className="font-semibold text-[#999270] text-[16px]">{`${
            singlePostCall ? postTime : time
          }`}</h2>
        </div>
        <div className="cursor-pointer">
          <OptionsIcon />
        </div>
      </div>
    </>
  );
}

export default PostHeader;
