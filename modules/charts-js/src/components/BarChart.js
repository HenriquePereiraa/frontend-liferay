import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ReferenceLine, Tooltip, ResponsiveContainer } from 'recharts';

export function BarRechart(props) {
	
	const {
		colors = [
			"yellow",
			"blue",
		],
		data = [],
		dataKeys = [],
		height,
		referenceLine = {},
		showTooltip = true,
		tooltipContent,
		width = '100%',
		xAxis = {},
	} = props;

	console.log(props)

	return (
			<>
            <h2>Barechar at charts module</h2>
			<BarChart
				data={data}
                width={400}
                height={400}
			>	
				<defs>
					<filter id="bgColor"  width="120%" y="-40%" height="170%">
						<feFlood floodColor="#000000"/>
						<feGaussianBlur stdDeviation="2"/>
						<feComponentTransfer>
						<feFuncA type="table" tableValues="0 0 0 1"/>
						</feComponentTransfer>
						<feComponentTransfer>
						<feFuncA type="table" tableValues="0 1 1 1 1 1 1 1"/>
						</feComponentTransfer>
						<feComposite operator="over" in="SourceGraphic"/>
					</filter>
				</defs>
				<CartesianGrid
					fill="#e8eced"
					horizontal={false}
					vertical={false}
				/>

				<XAxis {...xAxis} />

				<YAxis hide={true} padding={{ top: 20 }} />

				{showTooltip &&
					<Tooltip content={tooltipContent} />
				}

				{dataKeys.map((dataKey, index, arr) => (
					<Bar
						dataKey={dataKey}
						fill={colors[index]}
						key={index}
						radius={(arr.length - 1 === index) ? [4, 4, 0, 0] : null}
						stackId="1"
					/>
				))}

				{referenceLine.x &&
					<ReferenceLine
						x={referenceLine.x.value}
						label={referenceLine.x.label}
						stroke="black"
					/>
				}

				{referenceLine.y &&
					<ReferenceLine
						y={referenceLine.y.value}
						label={referenceLine.y.label}
						stroke="black"
					/>
				}
			</BarChart>
			</>
	)
}