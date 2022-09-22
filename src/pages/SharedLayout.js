import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import CreateFlashcard from "./CreateFlashcard";
import Flashcards from "./Flashcards";

const SharedLayout = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CreateFlashcard />} />
          <Route path="/myflashcards" element={<Flashcards />} />
        </Routes>
      </Router>
    </>
  );
};

export default SharedLayout;
