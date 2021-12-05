import React, { useState, useRef } from "react";
import Foot from "./components/Foot";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./Hooks";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./Theme";
import Burger from "./components/Burger";
import Menu from "./components/Menu";
import FocusLock from "react-focus-lock";
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
        <Home />
        <Foot />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default App;
