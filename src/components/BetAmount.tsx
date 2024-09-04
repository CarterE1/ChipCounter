import React, { useState } from "react";
import Button from "./Button";

type Props = {
  getPotStack: () => number;
  getStackSize: () => number;
  getStartingStack: () => number;
  getBetAmount: () => number;
  setBetAmount: (num: number) => number;
  hideBetAmountLabel: () => void;
  finishBet: () => void;
};

function BetAmount({
  getPotStack,
  getStackSize,
  getBetAmount,
  getStartingStack,
  setBetAmount,
  finishBet,
  hideBetAmountLabel,
}: Props) {
  const [betValue, setBetValue] = useState(0)
  const stepValue = getStartingStack() / 200

  function moneyRound(num: number) {
    return Math.ceil(num * 100) / 100;
  }

  return (
    <>
      <div className="bet-amount">
        <div className="btn-group bet-buttons" role="group">
          <Button
            variant="primary"
            onClick={() => {
              setBetValue(setBetAmount(getBetAmount() - stepValue));
            }}
          >
            -
          </Button>
          <Button variant="primary" onClick={() => {}}>
            POT
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setBetValue(setBetAmount(getBetAmount() + stepValue));
            }}
          >
            +
          </Button>
        </div>
        <div>
          <input
            type="range"
            className="slider bet-slider"
            id="betAmount"
            step={stepValue}
            min="0"
            max={getStackSize()}
            value={betValue}
            onChange={(e) => setBetValue(setBetAmount(parseFloat(e.target.value)))}
          />
          <label htmlFor="betAmount" className="bet-form-label">
            {"$" + moneyRound(getBetAmount())}
          </label>
        </div>
        <div className="btn-group bet-confirm-buttons" role="group">
          <Button
            variant="danger"
            onClick={() => {
              hideBetAmountLabel();
            }}
          >
            CANCEL
          </Button>
          <Button
            variant="success"
            onClick={() => {
              finishBet();
            }}
          >
            BET
          </Button>
        </div>
      </div>
    </>
  );
}

export default BetAmount;
