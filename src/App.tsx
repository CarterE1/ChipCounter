import PlayerInfo from "./components/PlayerInfo";
import "./App.css";
import { useState } from "react";

function App() {
  //const [alertVisable, setAlertVisable] = useState(false);
  var startingStack = 1000;
  const [stack1, setStack1] = useState(startingStack);
  const [stack2, setStack2] = useState(startingStack);
  const [player1Call, setPlayer1Call] = useState({ enabled: false, amount: 0 });
  const [player2Call, setPlayer2Call] = useState({ enabled: false, amount: 0 });

  const [potStack, setPotStack] = useState(0);

  function updatePlayerCall(player: string, amount: number) {
    if (player === "player1") {
      setPlayer2Call({ enabled: true, amount: amount });
      setPlayer1Call({ enabled: false, amount: 0 });
    } else {
      setPlayer1Call({ enabled: true, amount: amount });
      setPlayer2Call({ enabled: false, amount: 0 });
    }
  }

  function updatePot(num: number, player: string) {
    var newPotStack = potStack + num;
    if (newPotStack >= 0) {
      setPotStack(newPotStack);
      updatePlayerCall(player, num);
    }
  }

  function updateStack(num: number, player: string) {
    var newStack = player === "player1" ? stack1 + num : stack2 + num;
    if (newStack != null && newStack >= 0) {
      player === "player1" ? setStack1(newStack) : setStack2(newStack);
      return true;
    }
    return false;
  }

  function getStack(player: string) {
    return player === "player1" ? stack1 : stack2;
  }

  function foldHand(player: string) {
    player === "player1"
      ? setStack2(stack2 + potStack)
      : setStack1(stack1 + potStack);
    setPotStack(0);
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
          {/* Player1 */}
          <PlayerInfo
            // Constants
            playerName="Player1"
            // Functions
            getStack={() => getStack("player1")}
            getPotStack={() => potStack}
            updateStack={(num: number) => updateStack(num, "player1")}
            updatePot={(num: number) => updatePot(num, "player1")}
            foldHand={() => foldHand("player1")}
            getCallInfo={() => player1Call}
          ></PlayerInfo>
          {/* Pot */}
          <div className="pot">
            <h1 className="potStack1">{"$" + potStack}</h1>
            <h1 className="potStack2">{"$" + potStack}</h1>
          </div>
          {/* Player2 */}
          <PlayerInfo
            // Constants
            playerName="Player2"
            // Functions
            getStack={() => getStack("player2")}
            getPotStack={() => potStack}
            updateStack={(num: number) => updateStack(num, "player2")}
            updatePot={(num: number) => updatePot(num, "player2")}
            foldHand={() => foldHand("player2")}
            getCallInfo={() => player2Call}
          ></PlayerInfo>
        </div>
      </div>
    </>
  );
}

export default App;
