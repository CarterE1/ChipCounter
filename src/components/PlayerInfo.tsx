import React from "react";
import Button from "./Button";

type Props = {
  playerName: string;
  startingStack: number;
};

function PlayerInfo({ playerName, startingStack }: Props) {
  return (
    <div className={"PlayerPanel row g-2 " + playerName}>
      <div className="col">
        <Button
          onClick={() => {
            console.log("Bet");
          }}
        >
          Bet
        </Button>
      </div>
      <div className="col">
        <Button
          onClick={() => {
            console.log("Call");
          }}
        >
          Call
        </Button>
      </div>
      <div className="col">
        <Button
          onClick={() => {
            console.log("Fold");
          }}
        >
          Fold
        </Button>
      </div>
    </div>
  );
}

export default PlayerInfo;
