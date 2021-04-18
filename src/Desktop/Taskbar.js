import moment from "moment";
import React, { useState } from "react";
import { Button, Toolbar } from "react95";
import "../Styles/App.scss";
import StartMenu from "./StartMenu";
function Taskbar(props) {
  const [time, setTime] = useState(
    moment.utc().add(5, "h").add(30, "m").format("hh:mm A")
  );
  setInterval(() => {
    setTime(moment.utc().add(5, "h").add(30, "m").format("hh:mm A"));
  }, 1000);
  console.log(time);
  return (
    <>
      <StartMenu />
      <Toolbar className="taskbar old-border-box">
        <Button style={buttonStyle}>Start</Button>
        <div style={timerStyle}>
          <p>{time}</p>
        </div>
      </Toolbar>
    </>
  );
}

const buttonStyle = {
  fontWeight: "bold",
  width: "5%",
};
const timerStyle = {
  width: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px",
  height: "100%",
  boxShadow: "inset 2px 2px 2px rgb(0 0 0 / 40%)",
  alignText: "center",
};

export default Taskbar;
