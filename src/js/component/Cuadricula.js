import React from "react";

const Cuadricula = ({ value, onClick }) => {
	const style = value ? `squares ${value}` : `squares`;

	return (
		<button className={style} onClick={onClick}>
			{value}
		</button>
	);
};

export default Cuadricula;
