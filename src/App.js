import React from "react";
import Nav from "./navigation/Nav";
import { ThemeProvider } from "emotion-theming";
import Theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Nav />
    </ThemeProvider>
  );
}

export default App;
