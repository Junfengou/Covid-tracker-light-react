import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function Column2D({ data }) {
	const chartConfigs = {
		type: "column2d", // The chart type
		// height: "450", // Height of the chart
		// width: "402",
		height: "420",
		width: "380",
		dataFormat: "json", // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				caption: "Top 5 highest overall death by COVID",
				yAxisName: "States",
				xAxisName: "Deaths",
				xAxisNameFontSize: "16px",
				yAxisNameFontSize: "16px",
				theme: "candy",
				paletteColors: ["f66a0a", "28a745", "79b8ff", "d075e0", "586069"],
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

export default Column2D;