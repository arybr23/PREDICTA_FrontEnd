import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <section className="navbar">
      <div className="content">
        <div className="title">PREDICTA</div>
        <ul className="navigation">
          <li>
            <Link to="/">H</Link>
          </li>
          <li>
            <Link to="/history-view">VH</Link>
          </li>
          <li>
            <Link to="/transaction-input" className="middle-link">
              IT
            </Link>
          </li>
          <li>
            <Link to="/configuration">C</Link>
          </li>
          <li>
            <Link to="/account">Acc</Link>
          </li>
        </ul>
        <div className="notification">NF</div>
      </div>
    </section>
  );
}
