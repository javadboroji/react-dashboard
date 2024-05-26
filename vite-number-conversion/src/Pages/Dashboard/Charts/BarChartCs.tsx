import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'فروردین',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'اردیبهشت',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'خرداد',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'تیر',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  }
];
function BarChartCs() {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
    //   width={400}
    //   height={300}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 2,
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default BarChartCs