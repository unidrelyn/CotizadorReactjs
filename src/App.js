import React, { useState } from "react";

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

import styled from "@emotion/styled";

const Contenedor = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
	background-color: #fff;
	padding: 3rem;
`;

function App() {
	const [resumen, setResumen] = useState({
		cotizacion: 0,
		datos: {
			marca: "",
			year: "",
			plan: "",
		},
	});

	const [cargado, setCargado] = useState(false);

	const { cotizacion, datos } = resumen;
	return (
		<Contenedor>
			<Header titulo="Cotizador de Seguros" />
			<ContenedorFormulario>
				<Formulario setResumen={setResumen} setCargado={setCargado} />
				<Resumen datos={datos} />
				{cargado ? <Spinner /> : null}
				{!cargado ? <Resultado cotizacion={cotizacion} /> : null}
			</ContenedorFormulario>
		</Contenedor>
	);
}

export default App;
