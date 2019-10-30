
import React from "react";
import "./Header.css";


const Header = props =>(
  <div className ="header">
  <div className = "title">{props.children}</div>
  
  <div className = "score">
  Score: &nbsp;{props.score} &nbsp; Highscore: &nbsp;{props.highscore}
  </div>
  </div>
);

export default Header;