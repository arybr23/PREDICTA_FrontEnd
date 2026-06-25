import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Account from "./Pages/Account";
import Configuration from "./Pages/Configuration";
import Home from "./Pages/Home";
import TransactionInput from "./Pages/TransactionInput";
import HistoryView from "./Pages/HistoryView";

import Navbar from "./Navbar/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction-input" element={<TransactionInput />} />
        <Route path="/history-view" element={<HistoryView />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}
