import React, { useState, useEffect, createContext } from "react";
import mockGlobal from "./Data/mockGlobal";
import mockStates from "./Data/mockStates";
import mockCountries from "./Data/mockCountries";
import { sortData } from "../utils";
import axios from "axios";

const CovidContext = createContext();

const CovidProvider = ({ children }) => {
	//all the states
	const [global, setGlobal] = useState(0);
	const [states, setStates] = useState(mockStates);
	const [countries, setCountries] = useState([]);

	const instance = axios.create({
		baseURL: "https://disease.sh/v3/covid-19",
	});

	const GlobalData = async () => {
		const request = await instance.get("/all").then(({ data }) => {
			setGlobal(data);
			// console.log("All results: ", data);
		});
		return request;
	};

	const AllStates = async () => {
		const request = await instance.get("/states").then(({ data }) => {
			setStates(data);
			// console.log("All states: ", data);
		});
		return request;
	};

	const AllCountries = async () => {
		const request = await instance.get("/countries").then(({ data }) => {
			const sortedData = sortData(data);
			setCountries(sortedData);
			// console.log("Sorted countries: ", sortedData);
		});
		return request;
	};

	useEffect(() => {
		GlobalData();
		AllStates();
		AllCountries();
	}, []);

	// console.log("countries: ", countries);

	return (
		<CovidContext.Provider value={{ global, states, countries }}>
			{children}
		</CovidContext.Provider>
	);
};

export { CovidContext, CovidProvider };
