import React from "react";
import { Divider, List, ListItem } from "react95";
import "../Styles/App.scss";
function StartMenu(props) {
  return (
    <div className="start-menu">
      <p>Old-Skool Prateek</p>
      <List className="start-menu-list">
        <ListItem size="sm">View</ListItem>
        <Divider />
        <ListItem size="sm">Paste</ListItem>
        <ListItem size="sm">Paste Shortcut</ListItem>
        <ListItem size="sm">Undo Copy</ListItem>
        <Divider />
        <ListItem size="sm">Properties</ListItem>
      </List>
    </div>
  );
}

export default StartMenu;
