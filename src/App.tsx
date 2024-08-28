import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import PlayerInfo from "./components/PlayerInfo";
import "./App.css";

function App() {
  //const [alertVisable, setAlertVisable] = useState(false);
  return (
    /*<div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisable(false)}>ALERT ALERT ALERT</Alert>
      )}
      <Button onClick={() => setAlertVisable(true)}>Wassss up</Button>
    </div>*/
    <>
      <div className="wrapper">
        <div className="main">
          <PlayerInfo playerName="Player1" startingStack={100}></PlayerInfo>
          <div className="pot"></div>
          <PlayerInfo playerName="Player2" startingStack={100}></PlayerInfo>
        </div>
      </div>
    </>
  );
}

export default App;
