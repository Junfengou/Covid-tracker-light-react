import React from "react";

function DummyFile() {
	const [result, setResult] = useState(0);
	const [states, setStates] = useState([]);
	const instance = axios.create({
		baseURL: "https://disease.sh/v3/covid-19",
	});

	const allData = async () => {
		const request = await instance.get("/all").then((res) => {
			setResult(res.data.active);
			// console.log("All results: ", res);
		});
		return request;
	};

	const allStates = async () => {
		const request = await instance.get("/states").then(({ data }) => {
			const usStates = data.map((state) => ({
				name: state.state,
				cases: state.cases,
			}));
			setStates(usStates);
			// console.log("Request: ", usStates);
		});
		return request;
	};

	useEffect(() => {
		allData();
		allStates();
	}, []);
	return (
		<div>
			<p>woah </p>
			<h1>{result}</h1>
			{states.map((state) => {
				<Test hmm={state} />;
			})}
		</div>
	);
}

export default DummyFile;
