import React, { useState, useEffect, useContext } from "react";
import { CovidContext } from "./context/context";
import axios from "axios";
import { Bar, Title, Chart, Info, Tagline } from "./Components/Index";
import { prettyPrintStat, prettyNumStats } from "./utils";
import styled from "styled-components";
import "./App.css";

function App() {
	const { global, countries } = useContext(CovidContext);
	const {
		cases,
		deaths,
		recovered,
		todayCases,
		todayDeaths,
		todayRecovered,
	} = global;

	return (
		<div className="App">
			<Wrapper>
				<div className="left__section">
					<div className="title">
						<h1>Covid Tracker</h1>
					</div>
					<div className="boxes">
						<div className="box__wrapper">
							<Tagline
								isRed
								text="Infected"
								cases={prettyNumStats(cases)}
								tcases={prettyPrintStat(todayCases)}
							/>
						</div>
						<div className="box__wrapper">
							<Tagline
								isGrey
								text="Death"
								cases={prettyNumStats(cases)}
								tcases={prettyPrintStat(todayCases)}
							/>
						</div>
						<div className="box__wrapper">
							<Tagline
								isBlue
								text="Recovered"
								cases={prettyNumStats(cases)}
								tcases={prettyPrintStat(todayCases)}
							/>
						</div>
					</div>
					<div className="charts">
						<div className="chart__wrapper">
							<Chart />
						</div>
					</div>
				</div>
				<div className="right__section">
					<Info data={countries} />
				</div>
			</Wrapper>
		</div>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.left__section {
		/* border: solid red; */
		height: 100vh;
		width: 65vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.title {
			/* border: solid red; */
			height: 10%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			text-transform: uppercase;
		}

		.boxes {
			/* border: solid blue; */
			height: 30%;
			width: 100%;
			display: flex;
			justify-content: space-evenly;
			align-items: center;

			.box__wrapper {
				/* border: solid red; */
				height: 9rem;
				width: 18rem;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.charts {
			/* border: solid green; */
			height: 60%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.right__section {
		/* border: solid blue; */
		height: 100vh;
		width: 35vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.chart__wrapper {
		/* border: solid red; */
		height: 25rem;
		width: 70rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.chart {
		border: solid blue;
		height: 100%;
		width: 27%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default App;

{
	/**

<Title />
			<div className="box__wrapper">
				<Bar
					text="Infected"
					cases={prettyNumStats(cases)}
					tcases={prettyPrintStat(todayCases)}
				/>
				<Bar
					text="Death"
					deaths={prettyNumStats(deaths)}
					tdeath={prettyPrintStat(todayDeaths)}
				/>
				<Bar
					text="Recovered"
					recover={prettyNumStats(recovered)}
					trecover={prettyPrintStat(todayRecovered)}
				/>
			</div>

			<div className="chart__wrapper">
				<Chart />
			</div>
*/
}
