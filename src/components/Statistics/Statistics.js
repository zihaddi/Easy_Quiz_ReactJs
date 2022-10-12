import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'
const Statistics = () => {
  const data = useLoaderData()
  console.log(data.data)
  //const a = data.map(d => d.total)
  //console.log(a)
  return (
    <div>
       {/* <h3 className='chart-position'> <i>Chart for each quiz question</i> </h3> */}
       <div  className='chart-position'>
       <LineChart width={500} height={400} data={data.data}>
       <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
       <Line type="monotone" dataKey="total" stroke="#82ca9d" />
       </LineChart>
       </div>
      
    </div>
  );
};

export default Statistics;