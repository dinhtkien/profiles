import TopBar from "./Components/TopBar";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Main from "./Components/Main/Main"

function App() {
  const [mode, setMode] = React.useState("light");
  return (
    <>
      <TopBar
        mode={mode}
        SwitchStateHandler={setMode}
      />
      <Main
        mode={mode}
      />
    </>
  );
}

export default App;
