import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { PieReChart, BarRechart } from 'charts-js'
// import { useDispatch } from 'react-redux'
import { getChartDatas } from './redux/dataSlice';


export default function AppComponent() {

    // const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getChartDatas());
    }, [])

	const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ];

	  const barData = [
        {
            "In Process": 28,
            "Closed": 50,
            "name": "Sep 12"
        },
        {
            "In Process": 22,
            "Closed": 81,
            "name": "Sep 19"
        },
        {
            "In Process": 59,
            "Closed": 55,
            "name": "Sep 26"
        },
        {
            "In Process": 9,
            "Closed": 13,
            "name": "Oct 03"
        }
    ]

	return (
		<div>
			<h1>PieReChart - Module dashboard</h1>
			<PieReChart 
				data01={data01} 
				data02={data02}
			/>
			<h2>BarRechart - Module dashboard</h2>
			<BarRechart 
				data={barData}
				dataKeys={['In Process', 'Closed']}
				height={450}
				showTooltip={false}
				xAxis={{ dataKey: 'name', tickLine: false }}
			/>
		</div>
	);
}
