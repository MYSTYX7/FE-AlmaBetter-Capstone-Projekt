import React from "react";

const CardDesign = () => {
  return (
    <div className="bg-white hover:scale-[1.05] hover:transition-all hover:bg-red-50 flex flex-col p-5 rounded drop-shadow-md">
      <div className="flex flex-row">
        <div className="w-16 h-16">
          <img
            src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg"
            alt="..."
            class="rounded-full max-w-full h-auto align-middle"
          />
        </div>
        <div className="flex flex-col justify-center mx-5">
          <div className="font-bold">Group 1</div>
          <div className="text-sm text-gray-400">1 card</div>
        </div>
      </div>
      <div className="text-sm text-gray-500 my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        {/* need to add logic for viewing only two lines */}
      </div>
      <a
        href="a"
        className="font-bold mx-auto py-1 text-red-600 flex justify-center border-2 border-red-600 rounded hover:text-white hover:bg-red-600 transition hover:duration-700 w-1/2 hover:mx-auto ease-in-out"
      >
        View Cards
        {/* need to add logic for viewing card details */}
      </a>
    </div>
  );
};

export default CardDesign;
