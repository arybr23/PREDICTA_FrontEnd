import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/transaction-input">Input Transaction</Link>
        </li>
        <li>
          <Link to="/history-view">View History</Link>
        </li>
        <li>
          <Link to="/configuration">Configuration</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </div>
  );
}
