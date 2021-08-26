import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ContenerdorHeader = styled.header`
	background-color: #26c6da;
	padding: 10px;
	font-weight: bold;
	color: #ffffff;
`;

const TextoHeader = styled.h1`
	font-size: 2rem;
	margin: 0;
	font-family: "Slabo 27px", serif;
	text-align: center;
`;

const Header = ({ titulo }) => {
	return (
		<ContenerdorHeader>
			<TextoHeader>{titulo}</TextoHeader>
		</ContenerdorHeader>
	);
};

Header.propTypes = {
	titulo: PropTypes.string.isRequired,
};

export default Header;
