import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function Line2D({ data }) {
	const chartConfigs = {
		type: "doughnut2d", // The chart type
		// height: "450", // Height of the chart
		// width: "402",
		height: "47%",
		width: "100%",
		dataFormat: "json", // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				caption: "Top 10 most tested states",
				theme: "candy", //make sure the candy theme is imported
				decimals: 0,
				doughnutRadius: "40%",
				pieRadius: "40%",
				showBorder: true,
				showPercentValues: false,
				borderThickness: 20,
				borderColor: "#6a737d",
				valueFontSize: 15,
			},
			// Chart Data
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
}

export default Line2D;
