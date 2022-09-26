import React from "react";
import CardDesign from "../components/CardDesign";

const Flashcards = () => {
  return (
    <div className="bg-[rgba(245,241,236,255)] h-screen px-8 sm:px-16 md:px-24 lg:px-36 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardDesign />
        <CardDesign />
        <CardDesign />
        <CardDesign />
      </div>
    </div>
  );
};

export default Flashcards;
