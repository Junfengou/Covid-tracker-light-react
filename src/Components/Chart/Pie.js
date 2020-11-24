import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function Pie({ data }) {
	const chartConfigs = {
		type: "pie3d",
		// height: "450", // Height of the chart
		// width: "402",
		height: "420",
		width: "380",
		dataFormat: "json", // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				caption: "Top 5 highest overall cases/state",
				theme: "candy",
				decimals: 0,
				pieRadius: "45%",
				showPercentValues: 0,
				showBorder: true,
				borderThickness: 20,
				borderColor: "#6a737d",
			},
			// Chart Data
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
}

export default Pie;
