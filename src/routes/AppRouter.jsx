import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./../components/header/Header";
import TagContainer from "./../components/tagcontainer/TagContainer";
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
