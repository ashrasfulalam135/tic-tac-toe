import { useState } from "react";
import "./Player.css";

export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(name);

	function handleEdit() {
		setIsEditing((editing) => !editing); //invert the current boolean value, best practice recommanded by react
	}

	function handleChange(e) {
		setPlayerName(e.target.value);
	}

	let playerNameField = <span className="player-name">{playerName}</span>;
	if (isEditing) {
		playerNameField = <input type="text" required value={playerName} onChange={handleChange} />;
	}

	return (
		<li>
			<span className="player">
				{playerNameField}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
