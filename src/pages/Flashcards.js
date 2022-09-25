import React from "react";
import CardDesign from "../components/CardDesign";

const Flashcards = () => {
  return (
    <div className="bg-[rgba(245,241,236,255)] h-screen px-36 py-5">
      <div className="grid grid-cols-3 gap-4">
        <CardDesign />
        <CardDesign />
        <CardDesign />
        <CardDesign />
      </div>
    </div>
  );
};

export default Flashcards;
