import React from "react";
import { Link } from "react-router-dom";

export default function SearchDropdown({ searchResults }) {
  return (
    <div
      style={{
        zIndex: "1000",
        position: "absolute",
        top: "100%",
        height: "300px",
        overflow: "scroll",
        width: "inherit",
        background: "#fefefe",
        padding: "1rem 0",
      }}
    >
      {" "}
      {searchResults.map((item) => (
        <Link
          to={`/details/${item.schemeCode}`}
          key={item.schemeName}
          style={{ margin: "10rem 0" }}
        >
          {" "}
          {item.schemeName}
        </Link>
      ))}
    </div>
  );
}
