import {theme} from '../pages/_app';
export const LineChartData = {
	labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
	datasets: [
		{
			label: 'Experience Per Session',
			lineTension: 0.1,
			backgroundColor: [theme.colors.chartColors.backgroundColor[0]],
			borderColor: [theme.colors.chartColors.borderColor[0]],
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBorderWidth: 2,
			borderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			steppedLine: true,
			data: [1000, 300, 0, 1200, 500, 0, 200, 300]
		}
	]
};

export const RadarChartData = {
	labels: ['Character A', 'Character B', 'Character C', 'Character D', 'Character E'],
	datasets: [{
			label: '',
			backgroundColor: [theme.colors.chartColors.backgroundColor[1]],
			borderColor: [theme.colors.chartColors.borderColor[1]],
			hoverBackgroundColor: [theme.colors.chartColors.hoverColor[1]],
			borderWidth: 1,
			pointBackgroundColor: 'transparent',
			pointBorderColor: 'transparent',
			data: [1, 2, 3, 2, 3]
		}, {
			label: '',
			backgroundColor: [theme.colors.chartColors.backgroundColor[0]],
			borderColor: [theme.colors.chartColors.borderColor[0]],
			hoverBackgroundColor: [theme.colors.chartColors.hoverColor[0]],
			borderWidth: 1,
			pointBackgroundColor: 'transparent',
			pointBorderColor: 'transparent',
			data: [3, 5, 4, 6, 5]
		}
	]
};

export const BarChartData = {
	labels: ['Battles', 'Main Quest', 'Side Quest A', 'Side Quest B', 'Side Quest C'],
	datasets: [
		{
			label: 'Types of Sessions',
			backgroundColor: theme.colors.chartColors.backgroundColor,
			borderColor: theme.colors.chartColors.borderColor,
			borderWidth: 1,
			hoverBackgroundColor:theme.colors.chartColors.hoverColor,
			data: [8, 4, 6, 2, 0]
		}
	]
};

export const DonutChartData = {
	labels: [
		'Main',
		'Side',
		'Battles'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: theme.colors.chartColors.backgroundColor,
		borderColor: theme.colors.chartColors.borderColor,
		hoverBackgroundColor: theme.colors.chartColors.hoverColor
	}]
};
