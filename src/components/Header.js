import React from "react";
import almalogo from "../assets/images/almalogo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <img alt="almabetter-logo" className="w-28 my-3 mx-6" src={almalogo} />
      <div className="px-36 bg-[rgba(245,241,236,255)]">
        <div className="font-bold py-4 text-xl">Create Flashcard</div>
        <div className="pb-3 border-b-[3px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 pr-10 font-semibold underline decoration-4 underline-offset-[17px]"
                : "text-black"
            }
          >
            Create New
          </NavLink>
          <NavLink
            to="/myflashcards"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 pl-10 font-semibold underline decoration-4 underline-offset-[17px]"
                : "text-black"
            }
          >
            My Flashcards
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
