import React from 'react'
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts';
function SinceChart() {
    const data = [
        {
          name: 'فروردین',
         // uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'اردیبهشت',
        //  uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'خرداد',
       //   uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'تیر',
         // uv: 2780,
          pv: 3908,
          amt: 2000,
        }
      ];
  return (
    <ResponsiveContainer width="100%">
    <AreaChart
      width={200}
      height={200}
      data={data}
      syncId="anyId"
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
    </AreaChart>
  </ResponsiveContainer>
  )
}

export default SinceChart