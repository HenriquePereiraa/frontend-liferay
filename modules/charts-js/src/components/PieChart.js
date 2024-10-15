import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export function PieReChart(props) {
    const {data01, data02} = props;
    return (
        <>
            <h2>PieChart - Module Chartjs</h2>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart width={400} height={400}>
                    <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}