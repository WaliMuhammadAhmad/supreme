import React from 'react'
import PieChart from './charts/PieChart'
import BarChart from './charts/BarChart';
import LineGraph from './charts/LineGraph';

function Stats() {
  const data = [10, 20, 30, 40];
  const labels = ['Red', 'Blue', 'Yellow', 'Green'];
  const bar = [
    { label: 'Food', moneySpent: 100 },
    { label: 'Transportation', moneySpent: 50 },
    { label: 'Entertainment', moneySpent: 80 },
    { label: 'Shopping', moneySpent: 120 },
    { label: 'Utilities', moneySpent: 70 }
  ];
  const dummyData = [
    { date: '2024-03-01', amount: 100 },
    { date: '2024-03-02', amount: 150 },
    { date: '2024-03-03', amount: 200 },
    // Add more data for the remaining days...
  ];
  return (
    <div className='container flex content-around justify-around gap-5 bg-zinc-900'>
      <div className='cardcontainer flex flex-col w-[30vw] h-[78vh] justify-around'>
        <div className='w-full h-[25vh] border-2 rounded-xl bg-zinc-800 px-10'>
          <h1>Total Spent</h1>
          <p>$100</p>
        </div>
        <div className='w-full h-[25vh] border-2 rounded-xl bg-zinc-800 px-10'>
          <h1>Project in last 30 days</h1>
          <p>1</p>
        </div>
        <div className='w-full h-[25vh] border-2 rounded-xl bg-zinc-800 px-10'>
          <h1>Total Spent</h1>
          <p>$100</p>
        </div>
      </div>
      <div className='cardcontainer flex flex-col w-[45vw] h-[78vh] justify-around'>
        <div className='flex border-2 rounded-xl bg-zinc-800 gap-10 px-10'>
          <PieChart data={data} labels={labels} />
        </div>
        <div className='border-2 rounded-xl bg-zinc-800 px-10'>
          <LineGraph data={dummyData} />
        </div>
      </div>
    </div>
  )
}

export default Stats