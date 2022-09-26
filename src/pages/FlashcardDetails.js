import React from "react";
import {
  MdOutlineArrowBackIos,
  MdShare,
  MdDownload,
  MdPrint,
} from "react-icons/md";

const FlashcardDetails = () => {
  return (
    <div className="bg-[rgba(245,241,236,255)] h-screen px-8 sm:px-16 md:px-24 lg:px-36 py-5">
      <div className="flex flex-col">
        <div className="flex flex-row mb-5">
          <a href="myflashcards">
            <MdOutlineArrowBackIos size={28} />
          </a>
          <div className="flex flex-col px-5">
            <div className="text-lg font-bold">Group Name</div>
            {/* Logic for Group Name to show */}
            <div className="text-gray-500 mt-2">
              Group Description - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
            {/* Logic for Group Description to show */}
          </div>
        </div>
        <div className="flex flex-row gap-5 drop-shadow">
          <div className="w-1/5 h-full bg-white rounded p-2">
            <div className="flex text-gray-500 font-semibold border-b-2 pb-2 mb-2 justify-center">
              Flashcards
            </div>
            {/* Logic to add term titles below */}
            <div className="p-1 text-sm focus:font-bold">Lorem ipsum</div>
          </div>
          <div className="w-3/5 bg-white rounded h-full">2</div>
          <div className="w-1/5 flex flex-col h-full">
            <div className="flex flex-row items-center bg-white rounded-md py-2 px-5 mb-3 hover:scale-[1.1] hover:duration-300">
              <MdShare />
              <p className="mx-5 font-semibold">Share</p>
            </div>
            {/* Share modal to be added */}
            <div className="flex flex-row items-center bg-white rounded-md py-2 px-5 mb-3 hover:scale-[1.1] hover:duration-300">
              <MdDownload />
              <p className="mx-5 font-semibold">Download</p>
            </div>
            <div className="flex flex-row items-center bg-white rounded-md py-2 px-5 mb-3 hover:scale-[1.1] hover:duration-300">
              <MdPrint />
              <p className="mx-5 font-semibold">Print</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardDetails;
