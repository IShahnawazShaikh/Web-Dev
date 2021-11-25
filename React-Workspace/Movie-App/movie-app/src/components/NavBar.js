import React from "react";
import "../style/NavBar.css";
export default function Navbar({ setInputValue, search }) {
  return (
    <div className="navbar">
      <span className="heading">MovieDB</span>
      <input
        className="search-bar"
        type="text"
        placeholder="search..."
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyPress={search}
      />
    </div>
  );
}
