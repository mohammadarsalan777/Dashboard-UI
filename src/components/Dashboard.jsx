import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import OrderDetails from './OrderDetails'
import { ExpandLessOutlined, ExpandMoreOutlined } from '@mui/icons-material';
import Spinner from './Spinner';
import LineChart from './LineChart';
import ActivityBar from './ActivityBar';
import Goal from './Goal';
import RecentOrders from './RecentOrders';


const orderWeek3 = {
    week: "Week 3",
    totalRevenueGenerated: 100000,

}

const orderWeek4 = {
    week: "Week 4",
    totalOrders: 250,
    cancelledOrders: 30,
    deliveredOrders: 200,
    totalRevenueGenerated: 125000,
    orderChange: 5,
    cancelledChange: -5,
    deliveredChange: -3,
    revenueChange: 25000,
    totalSalePrice: 115000
};

const Dashboard = () => {
    const revenue = orderWeek4.revenueChange > 0

    const [showLineChart, setShowLineChart] = useState(true);

    return (
        <>


            <Navbar />

            <Sidebar />
            <div className='md:ml-20 mt-4 m-1'>
                <h1 className='text-2xl font-semibold md:ml-3 mt-24 md:pt-5 pb-2'>Dashboard</h1>
                <div className='md:grid md:grid-cols-3 gap-2'>

                    <div className='md:col-span-2 '>
                        <OrderDetails />
                    </div>

                    <div className='md:col-span-1 h-[125px] mt-3 md:mr-3 p-2 bg-gray-900 rounded'>
                        <div className='flex justify-between '>
                            <span className='md:pl-5'>
                                <h1 className='mb-2'>Net Profit</h1>
                                <h1 className='font-semibold text-4xl mb-[0.6rem]'>$ {orderWeek4.totalRevenueGenerated - orderWeek4.totalSalePrice}</h1>
                                <p className={`flex items-center text-[1rem] ${revenue ? 'text-green-500' : 'text-red-500'}`}>
                                    {revenue ? <ExpandLessOutlined /> : <ExpandMoreOutlined />} {(((orderWeek4.totalRevenueGenerated - orderWeek4.totalSalePrice) / orderWeek4.totalSalePrice) * 100).toFixed(2)}%
                                </p>
                            </span>

                            <span className='text-start mt-[-8px] pr-12'>
                                <Spinner />
                                <small className=''>Goal Completed</small>
                            </span>

                        </div>
                    </div>

                    <div className='md:col-span-2 bg-gray-900 md:p-3 md:mx-[11px] mt-3 md:mt-0 rounded shadow-md'>
                        <h1 className="text-xl font-semibold mb-4 text-start">Activity</h1>

                        <div className="app-container p-4">
                            <div className='md:flex md:justify-between'>

                                <div>
                                </div>
                                <div className="toggle-buttons flex justify-center gap-4 mb-4">
                                    <button
                                        onClick={() => setShowLineChart(true)}
                                        className={`md:px-4 md:py-2 py-2 px-2 hover:bg-green-500 rounded ${showLineChart ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                                    >
                                        Line Graph
                                    </button>
                                    <button
                                        onClick={() => setShowLineChart(false)}
                                        className={`md:px-4 py-2 px-2 md:py-2 hover:bg-green-500 rounded ${!showLineChart ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                                    >
                                        Bar Graph
                                    </button>
                                    <select className='text-black rounded' name="" id="">
                                        <option value="">Select Month </option>
                                        <option value="">January </option>
                                        <option value="">February </option>
                                        <option value="">March </option>
                                        <option value="">April </option>
                                        <option value="">May </option>
                                        <option value="">June </option>
                                        <option value="">July </option>
                                        <option value="">August </option>
                                        <option value="">September </option>
                                        <option value="">October </option>
                                        <option value="">November </option>
                                        <option value="">December</option>
                                    </select>
                                </div>
                            </div>
                            <div className="chart-container flex justify-center w-full max-w-full">
                                {showLineChart ? <LineChart /> : <ActivityBar />}
                            </div>
                        </div>

                    </div>

                    <div className='md:col-span-1 bg-gray-900 md:mr-3 md:mt-0 mt-3 md:mb-0 mb-3 rounded-md shadow-lg p-3 pl-5'>

                        <Goal />
                    </div>

                    <div className='md:col-span-2 bg-gray-900 md:p-3 md:mx-[11px] mt-3 md:mt-[11px] rounded shadow-md '>
                        <h1 className="text-xl font-semibold mb-4 text-start">Reacent Orders</h1>
                        <RecentOrders />
                    </div>

                    <div className='md:col-span-1 border'>
                        <h1>Feedback</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard
