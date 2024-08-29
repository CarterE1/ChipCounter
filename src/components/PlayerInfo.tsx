import { useState } from "react";
import Button from "./Button";
import BetAmount from "./BetAmount";

type Props = {
  playerName: string;
  updatePot: (num: number) => void;
  updateStack: (num: number) => boolean;
  getPotStack: () => number;
  getStack: () => number;
  foldHand: () => void;
};

function PlayerInfo({
  playerName,
  updatePot,
  getStack,
  foldHand,
  getPotStack,
  updateStack,
}: Props) {
  const [betAmountVisible, setBetAmountVisible] = useState(false);
  const [betAmount, setBetAmount] = useState(0);

  function finishBet() {
    if (updateStack(-1 * betAmount)) {
      updatePot(betAmount);
    }
    setBetAmountVisible(false);
  }

  return (
    <>
      <div className={"PlayerPanel row g-2 " + playerName}>
        <h1 className="stack">{"$" + getStack()}</h1>
        {/* Bet Amount */}
        {betAmountVisible && (
          <BetAmount
            finishBet={() => finishBet()}
            getPotStack={getPotStack}
            getStackSize={getStack}
            getBetAmount={() => betAmount}
            setBetAmount={(num: number) => setBetAmount(num)}
          ></BetAmount>
        )}

        {/* Buttons */}
        <div className="col">
          <Button
            className="main-btns"
            variant="primary"
            onClick={() => {
              /*
               */
              setBetAmountVisible(!betAmountVisible);
            }}
          >
            Bet
          </Button>
        </div>
        <div className="col">
          <Button
            className="main-btns"
            variant="primary"
            onClick={() => {
              //updatePot(stack); -- update pot with whatever player is calling
            }}
          >
            Call
          </Button>
        </div>
        <div className="col">
          <Button
            className="main-btns"
            variant="danger"
            onClick={() => {
              foldHand();
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
