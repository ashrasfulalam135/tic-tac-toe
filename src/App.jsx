import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import { useState } from "react";

function App() {
	const [activePlayer, setActivePlayer] = useState("X");

	function handleSelectedSquare() {
		setActivePlayer((currentActivePlayer) => (currentActivePlayer === "X" ? "O" : "X"));
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player name="Player 1" symbol="X" isActive={activePlayer === "X" ? true : false} />
					<Player name="Player 2" symbol="O" isActive={activePlayer === "O" ? true : false} />
				</ol>
				<GameBoard onSelectSquare={handleSelectedSquare} activePlayerSymbol={activePlayer} />
			</div>
			log
		</main>
	);
}

export default App;
