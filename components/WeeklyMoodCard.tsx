
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { weeklyMoodData } from '../constants';
import { TrendingUpIcon } from './icons/TrendingUpIcon';

const WeeklyMoodCard: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-sm font-medium text-slate-500">Weekly Mood</h2>
          <p className="text-5xl font-bold text-slate-800">75%</p>
        </div>
        <div className="flex items-center space-x-1 text-green-500 bg-green-100 rounded-full px-3 py-1 text-sm font-semibold">
          <TrendingUpIcon className="h-4 w-4" />
          <span>10%</span>
        </div>
      </div>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={weeklyMoodData} margin={{ top: 5, right: 20, left: -20, bottom: -10 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0"/>
            <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
            <YAxis hide={true} domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid #e2e8f0',
                borderRadius: '0.75rem',
              }}
              labelStyle={{ fontWeight: 'bold' }}
            />
            <Area type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyMoodCard;
