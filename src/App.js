import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";

import original from "react95/dist/themes/original";

import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import Taskbar from "./Desktop/Taskbar";
import Dashboard from "./Desktop/Dashboard";
import './Styles/App.css'
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'ms_sans_serif';
  src: url('${ms_sans_serif}') format('woff2');
  font-weight: 400;
  font-style: normal
}
@font-face {
  font-family: 'ms_sans_serif';
  src: url('${ms_sans_serif_bold}') format('woff2');
  font-weight: bold;
  font-style: normal
}
body {
  font-family: 'ms_sans_serif';
}
${styleReset}
`;
function App() {
  return (
    <div className="main-container">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Dashboard />
        <Taskbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
