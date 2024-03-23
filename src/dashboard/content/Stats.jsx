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
      <div className="stats shadow">

        <div className="stat">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>

      </div>
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