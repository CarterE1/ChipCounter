import { useState } from "react";
import Button from "./Button";

type Props = {
  playerName: string;
  startingStack: number;
  updatePot: (num: number) => void;
};

function PlayerInfo({ playerName, startingStack, updatePot }: Props) {
  const [stack, setStack] = useState(startingStack);

  function updateStack(num: number){
    var newStack = stack + num;
    if (newStack >= 0) {
      setStack(newStack);
      return true;
    }
    return false;
  }
  return (
    <>
      <div className={"PlayerPanel row g-2 " + playerName}>
        <h1 className="stack">{"$" + stack}</h1>
        {/* Buttons */}
        <div className="col">
          <Button
            variant="primary"
            onClick={() => {
              console.log("Bet");
              if (updateStack(-5)) {
                updatePot(5);
              }          
            }}
          >
            Bet
          </Button>
        </div>
        <div className="col">
          <Button
            variant="primary"
            onClick={() => {
              console.log("Call");
              //updatePot(stack); -- update pot with whatever player is calling
            }}
          >
            Call
          </Button>
        </div>
        <div className="col">
          <Button
            variant="danger"
            onClick={() => {
              console.log("Fold");
            }}
          >
            Fold
          </Button>
        </div>
      </div>
    </>
  );
}

export default PlayerInfo;
