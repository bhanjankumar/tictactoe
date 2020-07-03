import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  function loginCheck() {
    dispatch({
      type: "LOGIN_CHECK",
      payload: {
        player1: player1,
        player2: player2
      }
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-3" />
        <div className="col-6 w-200 mt-5">
          <div className="login p-3">
            <h5>
              Welcome to <span>Tic Tac Toe</span>
            </h5>
            <div class="form-group text-left">
              <label>Player 1</label>
              <input
                type="text"
                class="form-control"
                onChange={e => setPlayer1(e.target.value)}
              />
            </div>
            <div class="form-group text-left">
              <label>Player 2</label>
              <input
                type="text"
                class="form-control"
                onChange={e => setPlayer2(e.target.value)}
              />
            </div>
            <div>
              <button class="btn btn-primary" onClick={() => loginCheck()}>
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="col-3" />
      </div>
    </div>
  );
}
