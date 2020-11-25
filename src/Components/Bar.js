import React from "react";
import styled from "styled-components";

function Bar({ text, cases, tcases, deaths, tdeath, recover, trecover }) {
	// console.log("data: ", cases);
	return (
		<Wrapper>
			<div className="left__section" />

			<div className="right__section">
				<div className="text__wrapper">
					<h3>{text} Worldwide</h3>
					<p>
						Total: <span>{cases || deaths || recover}</span>{" "}
					</p>
					<p>
						Today: <span>{tcases || tdeath || trecover}</span>{" "}
					</p>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin-left: 2rem;
	/* background-color: var(--grey); */
	border: solid 2px var(--grey);
	border-radius: 3px;
	height: 10rem;
	width: 22rem;
	display: flex;
	/* border: solid green; */
	.left__section {
		background-color: var(--lightBlue);
		width: 1.5rem;
		height: 100%;
		/* border: solid purple; */
	}
	.right__section {
		/* border: solid purple; */
		background-color: var(--offWhite);
		width: 20.5rem;
		font-size: 1.1rem;

		.text__wrapper {
			/* border: solid red; */
			height: 100%;
			margin-left: 1rem;
		}

		h3 {
			font-family: "Nerko One", cursive !important;
			text-transform: uppercase;
		}

		p {
			font-family: "Nerko One", cursive !important;
			text-transform: uppercase;
			font-size: 1.2rem;
		}

		span {
			font-family: "Harmattan", sans-serif !important;
			font-size: 1.1rem;
		}
	}
`;

export default Bar;
