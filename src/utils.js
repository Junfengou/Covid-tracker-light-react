import React from "react";
import numeral from "numeral";

export const prettyPrintStat = (stat) =>
	stat ? `+${numeral(stat).format("0,0")}` : "+0";

export const prettyNumStats = (stat) =>
	stat ? `${numeral(stat).format("0,0")}` : "+0";

export const sortData = (data) => {
	const sortedData = [...data];

	sortedData.sort((highest, lowest) => {
		if (highest.cases > lowest.cases) {
			return -1;
		} else {
			return 1;
		}
	});
	return sortedData;
};
