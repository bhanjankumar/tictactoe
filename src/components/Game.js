import React, { useState, useEffect } from "react";
import Squarebox from "./Squarebox";
import { calculateWinner } from "./Calculate";

export default function Game({ player1, player2 }) {
  const arr = [null, null, null, null, null, null, null, null, null];
  const [box, setBox] = useState(arr);
  const [check, setCheck] = useState(true);
  const [winpl, setWinpl] = useState("");
  const winner = calculateWinner(box);
  const handleClick = i => {
    const copyBox = [...box];
    if (winner || copyBox[i]) return;
    copyBox[i] = check ? "X" : "O";
    setBox(copyBox);
    setCheck(!check);
  };
  useEffect(() => {
    let winplayer = winner == "X" ? player1 : player2;
    setWinpl(winplayer);
  }, [winner]);
  return (
    <>
      <Squarebox
        winner={winner}
        check={check}
        box={box}
        handleClick={handleClick}
      />
      <p className="mt-5">
        {winner ? "Winner: " + winpl : "Next Player: " + (check ? "X" : "O")}
      </p>
    </>
  );
}
