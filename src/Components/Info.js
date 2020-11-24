import React from "react";
import styled from "styled-components";
import numeral from "numeral";

function Info({ data }) {
	// console.log("info cases: ", data);
	return (
		<Wrapper>
			{/* {data.map(({ country, cases }) => (
				<tr>
					<td>{country}</td>
					<td>
						<strong>{numeral(cases).format("0,0")}</strong>
					</td>
				</tr>
			))} */}
			<h1>Info</h1>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border: solid red;
	height: 50rem;
	width: 25rem;
	border-radius: 9px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Info;
