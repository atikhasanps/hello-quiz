import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const  [data, setData ] = useState();
    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res=>res.json())
        .then(data =>setData(data.data))
    })
    return (
        <div className='mx-auto w-1/2 mt-16'>
           <AreaChart width={500} height={400} data={data}>


           <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
           <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
           </AreaChart>
            
        </div>
    );
};

export default Statistics;