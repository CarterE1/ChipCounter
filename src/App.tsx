import PlayerInfo from "./components/PlayerInfo";
import "./App.css";
import { useState } from "react";

function App() {
  //const [alertVisable, setAlertVisable] = useState(false);
  var startingStack = 100;
  const [potStack, setPotStack] = useState(0);

  function updatePot(num: number) {
    var newPotStack = potStack + num;
    if (newPotStack >= 0) {
      setPotStack(newPotStack);
    }
  }

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
          <PlayerInfo
            playerName="Player1"
            startingStack={startingStack}
            updatePot={(num: number) => updatePot(num)}
          ></PlayerInfo>
          <div className="pot">
            <h1 className="potStack1">{"$" + potStack}</h1>
            <h1 className="potStack2">{"$" + potStack}</h1>
          </div>
          <PlayerInfo
            playerName="Player2"
            startingStack={startingStack}
            updatePot={(num: number) => updatePot(num)}
          ></PlayerInfo>
        </div>
      </div>
    </>
  );
}

export default App;
