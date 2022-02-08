import React from "react";
import Cuadricula from "./Cuadricula";

const Tabla = ({ squares, onClick }) => (
	<div className="board">
		{squares.map((square, i) => (
			<Cuadricula key={i} value={square} onClick={() => onClick(i)} />
		))}
	</div>
);

export default Tabla;
