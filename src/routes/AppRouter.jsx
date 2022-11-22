import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TagContainer from "../components/tag/tagcontainer/TagContainer";
import Header from "./../components/header/Header";
import NotFound from "./../components/NotFound";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<TagContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
