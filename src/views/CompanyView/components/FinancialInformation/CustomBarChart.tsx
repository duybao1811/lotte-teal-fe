'use client';

import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, LabelList, Cell } from 'recharts';

interface ChartDataItem {
  name: string;
  revenue: number;
}

const data: ChartDataItem[] = [
  { name: '2021', revenue: 4000 },
  { name: '2022', revenue: 3000 },
  { name: '2023', revenue: 2000 },
];

interface CustomBarLabelProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  value?: number;
}

const CustomBarLabel = ({ x = 0, y = 0, width = 0, value = 0 }: CustomBarLabelProps) => {
  const radius = 16;
  return (
    <text
      x={x + width / 2}
      y={y - radius}
      textAnchor="middle"
      dominantBaseline="middle"
      className="font-medium text-base"
    >
      {value.toLocaleString()}
    </text>
  );
};

interface CustomBarChartProps {
  title: string;
  subTitle?: string;
}

const CustomBarChart = ({ title, subTitle }: CustomBarChartProps) => {
  const maxValue = Math.max(...data.map((d) => d.revenue));

  return (
    <div className={''}>
      <p className={'font-extrabold text-2xl mb-1.5 text-center'}>{title}</p>
      {subTitle ? <p className={'font-medium text-base text-center'}>{subTitle}</p> : null}
      <div className="bg-transparent h-[250px] w-full" style={{ background: 'transparent' }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 30, right: 30, left: 0, bottom: 5 }}
            style={{ background: 'transparent', boxShadow: 'none' }}
          >
            <XAxis
              dataKey="name"
              tickLine={false}
              stroke="#333333"
              axisLine={{ stroke: '#333333', strokeWidth: 1 }}
            />

            <Bar dataKey="revenue" barSize={35}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.revenue === maxValue ? '#D9000D' : '#888888'}
                />
              ))}

              <LabelList dataKey="revenue" content={<CustomBarLabel />} position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomBarChart;
