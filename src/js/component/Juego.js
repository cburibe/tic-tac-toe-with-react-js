import React, { useState } from "react";
import { calculateWinner } from "../Ganador";
import Tabla from "./Tabla";
import "../../styles/Juego.css";

const Game = ({ chooseX, props }) => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(chooseX);
	const winner = calculateWinner(board);

	const handleClick = (i) => {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = turn ? "X" : "O";
		setBoard(boardCopy);
		setTurn(!turn);
	};

	/* reiniciar boton */
	const refreshPage = () => {
		window.location.reload();
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-8 header">
						<h2>
							{winner
								? `${winner} Gano!`
								: `Es el turno de ${turn ? "X" : "O"}`}
						</h2>
						<button className="btn btn-light" onClick={refreshPage}>
							Reiniciar Juego
						</button>
					</div>
				</div>
				<Tabla squares={board} onClick={handleClick} />
			</div>
		</>
	);
};

export default Game;
