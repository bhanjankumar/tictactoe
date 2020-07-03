import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Squarebox({ handleClick, box, winner, check }) {
  const playerData = useSelector(state => state.reducer.data);
  return (
    <div className="container">
      <div className="row w-200 pt-5">
        <div className="col-4 pl-5">
          <h3 className="winner">{winner == "X" ? "Winner" : ""}</h3>
          <div className="user">
            <span>player1</span>
            <br />
            {playerData.player1}
            <br />
            {"X"}
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            {box.map((data, key) => (
              <div className="col-4">
                <button className="boxbutton" onClick={() => handleClick(key)}>
                  {data}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-4">
          <h3 className="winner">{winner == "O" ? "Winner" : ""}</h3>
          <div className="user">
            <span>player2</span>
            <br />
            {playerData.player2}
            <br />
            {"0"}
          </div>
        </div>
      </div>
    </div>
  );
}
