import React from "react";
import styled from "styled-components";
import { RiVirusLine } from "react-icons/ri";

function Title() {
	return (
		<Wrapper>
			<RiVirusLine />
			<h1>COVID TRACKER</h1>
			<RiVirusLine />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	height: 10vh;
	/* border: solid red; */
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Nerko One", cursive !important;
	h1 {
		margin-left: 1rem;
		margin-right: 1rem;
	}
`;

export default Title;
