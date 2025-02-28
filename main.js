function renderKIChart() {
	const options = {
		responsive: [
			{
				breakpoint: 1201,
				options: {
					chart: {
						height: 200,
						offsetY: -20,
					},
				},
			},
		],
		series: [67],
		chart: {
			height: 190,
			type: 'radialBar',
			offsetY: -30,
		},
		plotOptions: {
			radialBar: {
				startAngle: -110,
				endAngle: 110,
				dataLabels: {
					name: {
						fontSize: '0',
						offsetY: 0,
					},
					value: {
						offsetY: 12,
						fontFamily: 'Inter, Helvetica, Arial, sans-serif',
						fontSize: '12px',
						fontWeight: 400,

						colors: ['var(--gray)'],
						formatter: function (val) {
							if (!val) return 0
							return val + '%'
						},
					},
				},
				track: {
					opacity: 0.7,
				},
			},
		},
		fill: {
			type: 'solid',
			colors: ['#F18C5C'],
		},
		stroke: {
			dashArray: 2,
		},
	}
	const chart = new ApexCharts(document.querySelector('#KIChart'), options)
	chart.render()
}
function renderMZIChart() {
	const options = {
		responsive: [
			{
				breakpoint: 1201,
				options: {
					chart: {
						offsetY: -20,
					},
				},
			},
		],
		series: [0],
		chart: {
			height: 190,
			type: 'radialBar',
			offsetY: -30,
		},
		plotOptions: {
			radialBar: {
				startAngle: -110,
				endAngle: 110,
				dataLabels: {
					name: {
						fontSize: '0',
						offsetY: 0,
					},
					value: {
						offsetY: 12,
						fontFamily: 'Inter, Helvetica, Arial, sans-serif',
						fontSize: '12px',
						fontWeight: 400,
						formatter: function (val) {
							return ''
						},
					},
				},
				track: {
					opacity: 0.7,
				},
			},
		},
		fill: {
			type: 'solid',
			colors: ['#F18C5C'],
		},
		stroke: {
			curve: 'smooth',
			lineCap: 'round',
		},
	}
	const chart = new ApexCharts(document.querySelector('#MZIChart'), options)
	chart.render()
}
function renderSurveyTopicsChart() {
	const options = {
		responsive: [
			{
				breakpoint: 641,
				options: {
					plotOptions: {
						bar: {
							borderRadius: 3,
						},
					},
				},
			},
		],
		colors: ['#F18C5C'],
		series: [
			{
				data: [4.5, 2, 2.5, 4.5, 1.5, 4.5, 4.5, 2, 2.2, 4.5, 1.5, 4.5],
			},
		],
		chart: {
			type: 'bar',
			height: 195,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				borderRadius: 6,
				borderRadiusApplication: 'end',
				columnWidth: '30%',
			},
		},
		xaxis: {
			categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
			labels: {
				style: {
					fontFamily: 'Inter, Helvetica, Arial, sans-serif',
					fontSize: '12px',
					fontWeight: 400,
					colors: ['var(--gray)'],
				},
				offsetY: -3,
			},
		},
		yaxis: {
			axisTicks: {
				show: true,
			},
			min: 1,
			max: 5,
			labels: {
				formatter: function (value) {
					return Math.abs(Math.round(value))
				},
				style: {
					fontFamily: 'Inter, Helvetica, Arial, sans-serif',
					fontSize: '12px',
					fontWeight: 400,
					colors: ['var(--gray)'],
				},
			},
		},
		dataLabels: {
			enabled: false,
		},
	}

	const chart = new ApexCharts(
		document.querySelector('#SurveyTopicsChart'),
		options
	)
	chart.render()
}
function renderKPsChart() {
	const options = {
		series: [
			{
				data: [90, 70, 25, 60, 25, undefined],
			},
		],
		chart: {
			type: 'bar',
			height: 220,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				borderRadius: 6,
				borderRadiusApplication: 'end',
				distributed: true,
				columnWidth: '80%',
			},
		},
		colors: ['#5155C3', '#597DBE', '#5F99BB', '#65B8B7', '#6CDDB1', '#222531'],
		xaxis: {
			categories: ['KP 1', 'KP 2', 'KP 3', 'KP 4', 'KP 5', 'KP 6'],
			labels: {
				style: {
					fontFamily: 'Inter, Helvetica, Arial, sans-serif',
					fontSize: '12px',
					fontWeight: 400,
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (value) {
					if (!value) return value
					return Math.abs(Math.round(value)) + '%'
				},
				style: {
					fontFamily: 'Inter, Helvetica, Arial, sans-serif',
					fontSize: '12px',
					fontWeight: 400,
					colors: ['var(--gray)'],
				},
			},
			min: 0,
			max: 100,
			tickAmount: 4,
		},
		legend: {
			show: true,
			position: 'bottom',
			fontSize: '12px',
			itemMargin: {
				horizontal: 16,
			},
			markers: {
				customHTML: function () {
					return `
					<svg width="12" height="12" viewBox="0 0 12 12" 		xmlns="http://www.w3.org/2000/svg">	
						<rect width="12" height="12" rx="4" fill="currentColor"/>
					</svg>`
				},
			},
			onItemClick: {
				toggleDataSeries: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		noData: {
			style: {
				color: '#ffe000',
			},
		},
	}

	const chart = new ApexCharts(document.querySelector('#KPsChart'), options)
	chart.render()
}
document.addEventListener('DOMContentLoaded', function () {
	renderKIChart()
	renderMZIChart()
	renderSurveyTopicsChart()
	renderKPsChart()
})
