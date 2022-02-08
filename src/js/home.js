import React, { useState } from "react";
import FormInicial from "./component/FormInicial";
import Juego from "./component/Juego";

const Home = () => {
	const [runGame, setRunGame] = useState(false);
	const [chooseX, setChooseX] = useState(true);

	/*   */

	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");

	const playerHandler1 = (e) => {
		setPlayer1(e.target.value);
	};
	const playerHandler2 = (e) => {
		setPlayer2(e.target.value);
	};

	/*   */

	function showGame(chooseX) {
		setChooseX(chooseX);
		setRunGame(true);
	}

	return (
		<>
			<h2>Tic Tac Toe in React.js</h2>
			{/* switch  ternary operator*/}
			{runGame === true ? (
				<Juego chooseX={chooseX} player1={player1} player2={player2} />
			) : (
				<FormInicial
					startGame={showGame}
					playerHandler1={playerHandler1}
					playerHandler2={playerHandler2}
					player1={player1}
					player2={player2}
				/>
			)}
		</>
	);
};

export default Home;
