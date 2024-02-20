import "./App.css";
import Main from "./Page/Main";
import { useState } from "react";
import { TxtInput } from "./Context/Txtinput";

function App() {

  const [textinput, setTextinput]=useState()

  return (
    <>
    <TxtInput.Provider
    value={{
      textinput,
      toggle: setTextinput
    }}>

      <div className="divapp">
        <Main />
      </div>

    </TxtInput.Provider>
    </>
  );
}

export default App;
