import React from "react";

const NavBar = ({ totalNotes }) => {
  return (
    <section className="navbar">
      <h1 className="title"> Fire Note</h1>
      <p className="submit-btn ctr">
        Total Notes - <span>{totalNotes}</span>
      </p>
    </section>
  );
};

export default NavBar;
