import React from "react";
import { Route, Routes } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import SearchPage from "../pages/SearchPage";
import TrendingPage from "../pages/TrendingPage";
import TvPage from "../pages/TvPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Route>
      <Route path="/search" element={<SearchPage />} />
      <Route element={<BlankLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
