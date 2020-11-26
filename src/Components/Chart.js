import React, { useContext } from "react";
import styled from "styled-components";
import { CovidContext } from "../context/context";
import Pie from "./Chart/Pie";
import Doughnut from "./Chart/Doughnut";
import Column from "./Chart/Column2D";

function Chart() {
	const { states } = useContext(CovidContext);
	const StateInfo = states.reduce((total, item) => {
		const { state, cases, deaths, tests } = item;

		if (!cases) return total;

		if (!total[state]) {
			total[state] = {
				label: state,
				value: cases,
				death: deaths,
				test: tests,
			};
		} else {
			total[state] = {
				...total[cases],
			};
		}
		return total;
	}, []);

	// console.log("states: ", states);
	// console.log("cases: ", StateInfo);
	// ---------------------------------------------------------------->

	const MostCases = Object.values(StateInfo)
		.sort((lowest, highest) => {
			return highest.value - lowest.value;
		})
		.slice(0, 5);

	// console.log("MostCases: ", MostCases);
	// ---------------------------------------------------------------->
	const MostDeaths = Object.values(StateInfo)
		.sort((lowest, highest) => {
			return highest.death - lowest.death;
		})
		.map((item) => {
			return { ...item, value: item.death };
		})
		.slice(0, 5);

	// console.log("MostDeaths: ", MostDeaths);
	// ---------------------------------------------------------------->
	const MostTested = Object.values(StateInfo)
		.sort((lowest, highest) => {
			return highest.test - lowest.test;
		})
		.map((item) => {
			return { ...item, value: item.test };
		})
		.slice(0, 5);

	// console.log("MostTested: ", MostTested);
	// ---------------------------------------------------------------->
	return (
		<Wrapper>
			<div className="chart__holder">
				<Pie data={MostCases} />
			</div>
			<div className="chart__holder">
				<Column data={MostDeaths} />
			</div>
			<div className="chart__holder">
				<Doughnut data={MostTested} />
			</div>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	/* border: solid red; */
	height: 90%;
	width: 100%;
	/* margin-left: 3rem; */
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	.chart__holder {
		/* border: solid purple; */
		/* height: 32rem;
		width: 22rem; */
		height: 80%;
		width: 27%;
	}

	@media screen and (max-width: 1440px) {
		/* border: solid blue; */
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;

		.chart__holder {
			/* border: solid green; */
			height: 80%;
			width: 70%;
			margin-bottom: 2rem;
			margin-left: 6rem;
		}
	}
`;
export default Chart;
