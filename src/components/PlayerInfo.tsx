import { useState } from "react";
import Button from "./Button";
import BetAmount from "./BetAmount";

type Props = {
  playerName: string;
  updatePot: (num: number) => void;
  updateStack: (num: number) => boolean;
  getPotStack: () => number;
  getStack: () => number;
  getCallInfo: () => { enabled: boolean; amount: number };
  foldHand: () => void;
};

function PlayerInfo({
  playerName,
  updatePot,
  getStack,
  foldHand,
  getPotStack,
  getCallInfo,
  updateStack,
}: Props) {
  const [betAmountVisible, setBetAmountVisible] = useState(false);
  const [betAmount, setBetAmount] = useState(0);

  function finishBet(amount?: number) {
    var _betAmount = amount ? amount : betAmount;
    if (updateStack(-1 * _betAmount)) {
      updatePot(_betAmount);
    }
    setBetAmountVisible(false);
  }

  function hideBetAmount() {
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
            hideBetAmountLabel={() => hideBetAmount()}
            setBetAmount={(num: number) => {
              num >= 0 && num <= getStack() ? setBetAmount(num) : null;
            }}
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
              setBetAmount(0);
            }}
          >
            Bet
          </Button>
        </div>
        <div className="col">
          <Button
            className="main-btns"
            variant={getCallInfo().enabled ? "success" : "secondary"}
            onClick={() => {
              finishBet(getCallInfo().amount);
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
