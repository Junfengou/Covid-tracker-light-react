import React from "react";
import styled from "styled-components";
import numeral from "numeral";

function Info({ data }) {
	// console.log("info cases: ", data);
	return (
		<Wrapper>
			<div className="title">
				<h3>CASES IN EACH COUNTRY</h3>
			</div>
			<div className="table">
				{data.map(({ country, cases }) => (
					<tr>
						<td>{country}</td>
						<td>
							<strong>{numeral(cases).format("0,0")}</strong>
						</td>
					</tr>
				))}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	/* border: solid red; */
	height: 55rem;
	width: 25rem;
	border-radius: 9px;
	/* margin-top: 10rem; */
	display: flex;
	flex-direction: column;
	background-color: var(--offWhite);

	.title {
		/* border: solid purple; */
		margin-bottom: 0.4rem;
		/* margin-left: 3rem; */
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1;
		font-size: 1.3rem;
		height: 2rem;
		margin-top: 0.5rem;
		font-family: "Nerko One", cursive;
	}

	.table {
		/* border: solid gold; */
		overflow-y: overlay;
		padding: 2rem;
		font-size: 1.3rem;

		tr:nth-of-type(odd) {
			background-color: #c3c1ce;
			/* background-color: var(--orange); */
		}
	}

	.table::-webkit-scrollbar {
		display: none;
	}
`;

export default Info;
