'use client';

import { ChartData } from '@shared/types';

interface AnalyticsChartProps {
  data: ChartData;
  testId?: string;
}

export function AnalyticsChart({ data, testId }: AnalyticsChartProps) {
  const { title, data: chartData } = data;
  
  if (chartData.length === 0) {
    return (
      <div data-testid={testId}>
        <h3 className="text-lg font-medium text-[hsl(var(--text))] mb-4">{title}</h3>
        <p className="text-[hsl(var(--text-muted))] text-center py-8">
          No data available
        </p>
      </div>
    );
  }

  const maxValue = Math.max(...chartData.map((d: { value: number }) => d.value));
  const chartHeight = 200;
  const barWidth = Math.max(40, Math.min(80, 300 / chartData.length));
  const chartWidth = chartData.length * (barWidth + 10) + 40;

  return (
    <div data-testid={testId}>
      <h3 className="text-lg font-medium text-[hsl(var(--text))] mb-4">{title}</h3>
      
      <div className="overflow-x-auto">
        <svg 
          width={chartWidth} 
          height={chartHeight + 60}
          className="text-[hsl(var(--text))]"
        >
          {/* Chart bars */}
          {chartData.map((item: { label: string; value: number }, index: number) => {
            const barHeight = maxValue > 0 ? (item.value / maxValue) * chartHeight : 0;
            const x = index * (barWidth + 10) + 20;
            const y = chartHeight - barHeight + 20;
            
            return (
              <g key={item.label}>
                {/* Bar */}
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill="hsl(var(--primary))"
                  className="opacity-80 hover:opacity-100"
                  rx="2"
                />
                
                {/* Value label */}
                <text
                  x={x + barWidth / 2}
                  y={y - 5}
                  textAnchor="middle"
                  className="text-xs fill-[hsl(var(--text-muted))]"
                >
                  {item.value}
                </text>
                
                {/* X-axis label */}
                <text
                  x={x + barWidth / 2}
                  y={chartHeight + 40}
                  textAnchor="middle"
                  className="text-xs fill-[hsl(var(--text-muted))]"
                  transform={`rotate(-45, ${x + barWidth / 2}, ${chartHeight + 40})`}
                >
                  {item.label.length > 15 ? `${item.label.substring(0, 15)}...` : item.label}
                </text>
              </g>
            );
          })}
          
          {/* Y-axis line */}
          <line
            x1="20"
            y1="20"
            x2="20"
            y2={chartHeight + 20}
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
          
          {/* X-axis line */}
          <line
            x1="20"
            y1={chartHeight + 20}
            x2={chartWidth - 20}
            y2={chartHeight + 20}
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
        </svg>
      </div>
      
      {/* Data list for accessibility and debugging */}
      <div className="mt-4 text-sm text-[hsl(var(--text-muted))]">
        {chartData.map((item: { label: string; value: number }) => (
          <div key={item.label} className="flex justify-between py-1">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}