import React from "react";
import { Link } from "react-router-dom";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <p>{props.movie}</p>
        <Link to="/">
          <HomeSharpIcon className="HomeSharpIcon" sx={{ fontSize: 25 }} />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
