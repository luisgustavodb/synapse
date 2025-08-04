
import React from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import type { Insight } from '../types';

interface InsightDonutChartProps {
    insight: Insight;
}

const InsightDonutChart: React.FC<InsightDonutChartProps> = ({ insight }) => {
    const data = [{ name: insight.title, value: insight.value, fill: insight.color }];

    return (
        <div className="rounded-3xl p-4 shadow-md flex flex-col items-center text-center h-full bg-white">
            <h3 className="text-sm font-semibold text-slate-500 mb-2 h-10">{insight.title}</h3>
            <div className="w-full h-32 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart 
                        innerRadius="70%" 
                        outerRadius="85%" 
                        data={data} 
                        startAngle={90} 
                        endAngle={-270}
                        barSize={12}
                    >
                        <PolarAngleAxis
                          type="number"
                          domain={[0, 100]}
                          angleAxisId={0}
                          tick={false}
                        />
                        <RadialBar
                          background={{ fill: '#f1f5f9' }}
                          dataKey="value"
                          cornerRadius={6}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-3xl font-bold" style={{color: insight.color}}>
                        {insight.value}%
                    </span>
                </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">{insight.label}</p>
        </div>
    );
};

export default InsightDonutChart;