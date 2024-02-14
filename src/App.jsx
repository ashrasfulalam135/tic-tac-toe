import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";
import { useState } from "react";
function DeriveActiveplayer(gameTurns) {
	let currentPlayer = "X";
	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		currentPlayer = "O";
	}
	return currentPlayer;
}
function App() {
	const [gameTurns, setGameTurns] = useState([]);
	// const [activePlayer, setActivePlayer] = useState("X");
	const activePlayer = DeriveActiveplayer(gameTurns);

	function handleSelectedSquare(rowIndex, colIndex) {
		// setActivePlayer((currentActivePlayer) => (currentActivePlayer === "X" ? "O" : "X"));
		setGameTurns((prevTurns) => {
			const currentPlayer = DeriveActiveplayer(prevTurns);
			const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
			return updatedTurns;
		});
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player name="Player 1" symbol="X" isActive={activePlayer === "X" ? true : false} />
					<Player name="Player 2" symbol="O" isActive={activePlayer === "O" ? true : false} />
				</ol>
				<GameBoard onSelectSquare={handleSelectedSquare} turns={gameTurns} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
