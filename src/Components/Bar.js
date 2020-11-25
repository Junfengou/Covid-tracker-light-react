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
	margin-left: 2rem;
	/* background-color: var(--grey); */
	border: solid 2px var(--grey);
	border-radius: 3px;
	/* height: 10rem;
	width: 22rem; */
	height: 70%;
	width: 23%;
	display: flex;
	/* border: solid green; */
	.left__section {
		/* background-color: var(--grey); */
		/* width: 1.5rem; */
		width: 8%;
		height: 100%;
		/* border: solid purple; */
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
		/* border: solid purple; */
		background-color: var(--offWhite);
		/* width: 20.5rem; */
		width: 100%;
		height: 100%;
		object-fit: contain;
		/* font-size: 1.1rem; */

		.text__wrapper {
			/* border: solid red; */
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

		@media screen and (max-width: 1650px) {
			p,
			span {
				margin-top: -0.5rem;
				font-size: 1rem;
			}
		}

		@media screen and (max-width: 1250px) {
			p,
			span,
			h3 {
				font-size: 0.9rem;
			}
		}
	}
`;

export default Bar;
