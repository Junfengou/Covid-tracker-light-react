import React from "react";
import styled from "styled-components";

function Title() {
	return (
		<Wrapper>
			<h1>Covid Tracker</h1>
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
`;

export default Title;
