import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [expanded, setExpaned] = useState(true);
  const [selected, setSelected] = useState(0);
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon className="icon" />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div style={{ border: "0.1px solid #3D70B2" }}></div>
          {user.bootcamps.map((item, index) => {
            return (
              <div className="menuItem" key={index}>
                <UilSignOutAlt className="icon" />
                <span>{item}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt className="icon" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
