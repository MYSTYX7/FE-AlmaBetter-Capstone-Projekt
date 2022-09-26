import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import CreateFlashcard from "./CreateFlashcard";
import Flashcards from "./Flashcards";
import FlashcardDetails from "./FlashcardDetails";

const SharedLayout = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CreateFlashcard />} />
          <Route path="/myflashcards" element={<Flashcards />} />
          <Route path="/flashcarddetails" element={<FlashcardDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default SharedLayout;
