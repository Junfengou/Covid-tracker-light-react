import React from "react";
import styled from "styled-components";

function Bar({
	text,
	cases,
	tcases,
	deaths,
	tdeath,
	recover,
	trecover,
	isRed,
	isGrey,
	isBlue,
}) {
	// console.log("data: ", cases);
	return (
		<Wrapper>
			<div
				className={`left__section ${isRed && "red"} ${isGrey && "grey"} ${
					isBlue && "blue"
				}`}
			/>

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
	width: 1rem;
	height: 1rem;
`;

export default Bar;

/**
 * 
 * 
 *
	border: solid 2px var(--grey);
	border-radius: 3px;
	height: 10rem;
	width: 22rem;

	display: flex;

	.left__section {

		width: 1.5rem;
		height: 10rem;

	}
	.red {
		background-color: var(--red);
	}

	.grey {
		background-color: var(--grey);
	}

	.blue {
		background-color: var(--lightBlue);
	}

	.right__section {
		background-color: var(--offWhite);
		width: 100%;
		height: 100%;
		object-fit: contain;

		.text__wrapper {
			height: 100%;
			width: 100%;
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

	@media screen and (max-width: 1250px) {
		width: 12rem;
		height: 10rem;

		.left__section {
			width: 1.5rem;
			height: 10rem;
		}

		p,
		span,
		h3 {
			font-size: 0.9rem;
		}
	}
 * 
 * 
 */
