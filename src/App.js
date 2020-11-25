import React, { useState, useEffect, useContext } from "react";
import { CovidContext } from "./context/context";
import axios from "axios";
import { Bar, Title, Chart, Info } from "./Components/Index";
import { prettyPrintStat, prettyNumStats } from "./utils";
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
			<div className="content__left">
				<Title />
				<div className="box__wrapper">
					<Bar
						isRed
						text="Infected"
						cases={prettyNumStats(cases)}
						tcases={prettyPrintStat(todayCases)}
					/>
					<Bar
						isGrey
						text="Death"
						deaths={prettyNumStats(deaths)}
						tdeath={prettyPrintStat(todayDeaths)}
					/>
					<Bar
						isBlue
						text="Recovered"
						recover={prettyNumStats(recovered)}
						trecover={prettyPrintStat(todayRecovered)}
					/>
				</div>

				<div className="chart__wrapper">
					<Chart />
				</div>
			</div>
			<div className="content__right">
				<Info data={countries} />
				{/* <DummyList /> */}
			</div>
		</div>
	);
}

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
