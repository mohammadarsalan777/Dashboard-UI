import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
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

const ActivityBar = () => {
    const [options, setOptions] = useState(getChartOptions());

    function getChartOptions() {
        return {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Generated Revenue for 4 Weeks (Bar Chart)',
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 500,
                    },
                },
            },
        };
    }

    useEffect(() => {
        const handleResize = () => {
            setOptions(getChartOptions());
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const data = {
        labels: days,
        datasets: weeklyRevenueData.map((weekData, index) => ({
            label: weekData.week,
            data: weekData.dailyRevenue,
            backgroundColor: `rgba(${index * 60}, ${100 + index * 20}, ${150 + index * 30}, 0.5)`,
            borderColor: `rgba(${index * 60}, ${100 + index * 20}, ${150 + index * 30}, 1)`,
            borderWidth: 2,
        })),
    };

    return <Bar data={data} options={options} />;
};

export default ActivityBar;
