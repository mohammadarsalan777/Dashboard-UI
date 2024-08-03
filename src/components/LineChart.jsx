import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const weeklyRevenueData = [
    {
        week: 'Week 1',
        dailyRevenue: [1500, 1200, 1800, 1300, 1700, 2000, 2200]
    },
    {
        week: 'Week 2',
        dailyRevenue: [1600, 1400, 1900, 1500, 1800, 2100, 2300]
    },
    {
        week: 'Week 3',
        dailyRevenue: [1700, 1500, 2000, 1600, 1900, 2200, 2400]
    },
    {
        week: 'Week 4',
        dailyRevenue: [1800, 1600, 2100, 1700, 2000, 2300, 2500]
    }
];

const LineChart = () => {
    const data = {
        labels: days,
        datasets: weeklyRevenueData.map((weekData, index) => ({
            label: weekData.week,
            data: weekData.dailyRevenue,
            borderColor: `rgba(${index * 60}, ${100 + index * 20}, ${150 + index * 30}, 1)`,
            backgroundColor: `rgba(${index * 60}, ${100 + index * 20}, ${150 + index * 30}, 0.5)`,
            fill: false,
        })),
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Daily Generated Revenue for 4 Weeks (Line Chart)',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
