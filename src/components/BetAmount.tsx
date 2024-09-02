import React, { useState } from "react";
import Button from "./Button";

type Props = {
  getPotStack: () => number;
  getStackSize: () => number;
  getBetAmount: () => number;
  setBetAmount: (num: number) => void;
  hideBetAmountLabel: () => void;
  finishBet: () => void;
};

function BetAmount({
  getPotStack,
  getStackSize,
  getBetAmount,
  setBetAmount,
  finishBet,
  hideBetAmountLabel,
}: Props) {
  return (
    <>
      <div className="bet-amount">
        <div className="btn-group bet-buttons" role="group">
          <Button
            variant="primary"
            onClick={() => {
              setBetAmount(getBetAmount() - 5);
              document
                .querySelector("#betAmount")
                ?.setAttribute("value", getBetAmount().toString());
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
              setBetAmount(getBetAmount() + 5);
              document
                .querySelector("#betAmount")
                ?.setAttribute("value", getBetAmount().toString());
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
            step="5"
            min="0"
            max={getStackSize()}
            onChange={(e) => setBetAmount(parseInt(e.target.value))}
          />
          <label htmlFor="betAmount" className="bet-form-label">
            {"$" + getBetAmount()}
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
