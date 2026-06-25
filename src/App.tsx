import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
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
