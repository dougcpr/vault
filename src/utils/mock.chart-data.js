export const LineChartData = {
	labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
	datasets: [
		{
			label: 'Experience Per Session',
			lineTension: 0.1,
			backgroundColor: 'rgba(80, 188, 145,0.4)',
			borderColor: '#50bc91',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: '#50bc91',
			pointBackgroundColor: '#fff',
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
			backgroundColor: 'rgba(255, 22, 85, 0.4)',
			borderColor: 'rgba(255, 22, 85, 1)',
			borderWidth: 1,
			pointBackgroundColor: 'transparent',
			pointBorderColor: 'transparent',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(179,181,198,1)',
			data: [1, 2, 3, 2, 3]
		}, {
			label: '',
			backgroundColor: 'rgba(80, 188, 145, 0.4)',
			borderColor: 'rgba(80, 188, 145, 1)',
			borderWidth: 1,
			pointBackgroundColor: 'transparent',
			pointBorderColor: 'transparent',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(80, 188, 145, 1)',
			data: [3, 5, 4, 6, 5]
		}
	]
};

export const BarChartData = {
	labels: ['Battles', 'Main Quest', 'Side Quest A', 'Side Quest B', 'Side Quest C'],
	datasets: [
		{
			label: 'Types of Sessions',
			backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(99,255,132,0.2)', 'rgba(99,132,255,0.2)', 'rgba(255,255,99,0.2)'],
			hoverBackgroundColor: ['rgba(255,99,132,0.4)', 'rgba(99,255,132,0.4)', 'rgba(99,132,255,0.4)', 'rgba(255,255,99,0.4)'],
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
		backgroundColor: [
			'rgba(80, 188, 145, 0.4)',
			'rgba(255, 22, 85, 0.4)',
			'rgba(52, 125, 219, 0.4)'
		],
		borderColor: [
			'rgba(80, 188, 145, 1)',
			'rgba(255, 22, 85, 1)',
			'rgba(52, 125, 219, 1)'
		],
		hoverBackgroundColor: [
			'rgba(80, 188, 145, 0.2)',
			'rgba(255, 22, 85, 0.2)',
			'rgba(52, 125, 219, 0.2)',
		]
	}]
};
