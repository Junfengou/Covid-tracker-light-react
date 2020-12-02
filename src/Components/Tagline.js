import React from "react";
import styled from "styled-components";

function Tagline({
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
	return (
		<Wrapper>
			{/* <div className="left" /> */}
			<div
				className={`left ${isRed && "red"} ${isGrey && "grey"} ${
					isBlue && "blue"
				}`}
			/>
			<div className="right">
				<h3>{text} Worldwide</h3>
				<p>
					Total: <span>{cases || deaths || recover}</span>{" "}
				</p>
				<p>
					Today: <span>{tcases || tdeath || trecover}</span>{" "}
				</p>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* border: solid green; */

	.left {
		/* border: solid red; */
		width: 10%;
		height: 100%;
		background-color: var(--grey);
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

	.right {
		background-color: var(--white);
		/* border: solid blue; */
		width: 90%;
		height: 100%;
		display: flex;
		/* justify-content: center; */
		/* align-items: center; */
		flex-direction: column;

		h3 {
			/* border: solid red; */
			margin-left: 1rem;
		}

		p {
			/* border: solid red; */
			margin-top: -1rem;
			margin-left: 1rem;
			margin-bottom: 1.5rem;
		}
	}
`;

export default Tagline;
