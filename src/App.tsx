import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import PlayerInfo from "./components/PlayerInfo";

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
      <PlayerInfo playerName="Player1" startingStack={100}></PlayerInfo>
      <PlayerInfo playerName="Player2" startingStack={100}></PlayerInfo>
    </>
  );
}

export default App;
