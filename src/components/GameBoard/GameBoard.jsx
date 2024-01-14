import { useState } from "react";
import "./GameBoard.css";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function handleClickedSquare(rowIndex, colIndex) {
		setGameBoard((prevGameBoard) => {
			const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]; //object must update in immutable way
			updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
			return updatedGameBoard;
		});

		onSelectSquare();
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => handleClickedSquare(rowIndex, colIndex)}>{playerSymbol}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
