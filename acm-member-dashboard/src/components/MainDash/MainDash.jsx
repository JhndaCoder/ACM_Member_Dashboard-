import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import Github from "../Github/Github";

import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Hello Tushar</h1>
      <h6>Welcome Back!</h6>
      <h1 className="active-course">Active Bootcamps</h1>

      <Cards />
      
      <Github />
      <Table />
    </div>
  );
};

export default MainDash;