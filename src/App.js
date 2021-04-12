import React from "react";
import "./App.css";

import { Main } from "./components/Main";
import { Preloader } from "./components/Preloader";
import { useContextFunc } from "./contexts/ContextProvider";

function App() {
  const { isPreloading } = useContextFunc();
  return (
    <div className="App">
      {isPreloading && <Preloader />}
      <Main />
    </div>
  );
}

export default App;
