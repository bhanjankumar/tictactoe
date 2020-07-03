import React, { useState, useEffect } from "react";
import "./styles.css";
import Game from "./components/Game";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const playerData = useSelector(state => state.reducer.data);
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(playerData);
  }, [playerData]);
  return (
    <div className="App">
      {!user.player1 && !user.player2 && <Login />}
      {user.player1 && user.player2 && (
        <Game player1={user.player1} player2={user.player2} />
      )}
    </div>
  );
}
