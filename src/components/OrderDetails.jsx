import React from 'react';
import { alpha, Avatar, styled } from '@mui/material';
import TotalOrder from '../assets/order.png';
import Shipped from '../assets/shipped.png';
import Cancel from '../assets/cancel.png';
import Revenue from '../assets/revenue.png';
import { ExpandLessOutlined, ExpandMoreOutlined } from '@mui/icons-material';

const IconWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(3),
    '& svg': {
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        borderRadius: '100%',
        padding: theme.spacing(1),
        fontSize: '3rem',
        color: 'gray',
    },
}));

const order = {
    week: "Week 4",
    totalOrders: 250,
    cancelledOrders: 30,
    deliveredOrders: 200,
    totalRevenueGenerated: 125000,
    orderChange: 5,
    cancelledChange: -5,
    deliveredChange: -3,
    revenueChange: 25000
};

const OrderDetails = () => {
    const isIncrementOrder = order.orderChange > 0;
    const isIncrementDelivery = order.deliveredChange > 0;
    const isIncrementCancel = order.cancelledChange > 0;
    const isIncrementRevenue = order.revenueChange > 0;

    return (
        <div className='md:flex md:justify-between md:p-3 grid grid-cols-2 gap-3 '>

            {/* Total Orders Card */}
            <div className='shadow-md h-32 w-full rounded bg-gray-900 p-2'>
                <IconWrapper className='mb-1'>
                    <Avatar src={TotalOrder} style={{ cursor: "pointer" }} />
                </IconWrapper>
                <h1 className='font-semibold text-[1.1rem] mb-2'>Total Orders</h1>
                <span className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>{order.totalOrders}</h1>
                    <h1 className={`flex items-center text-[1rem] ${isIncrementOrder ? 'text-green-500' : 'text-red-500'}`}>
                        {isIncrementOrder ? <ExpandLessOutlined /> : <ExpandMoreOutlined />} {(order.orderChange / order.totalOrders) * 100}%
                    </h1>
                </span>
            </div>

            {/* Total Deliveries Card */}

            <div className='shadow-md h-32 w-full rounded bg-gray-900 p-2'>
                <IconWrapper className='mb-1'>
                    <Avatar src={Shipped} style={{ cursor: "pointer" }} />
                </IconWrapper>
                <h1 className='font-semibold text-[1.1rem] mb-2'>Total Delivered</h1>
                <span className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>{order.deliveredOrders}</h1>
                    <h1 className={`flex items-center text-[1rem] ${isIncrementDelivery ? 'text-green-500' : 'text-red-500'}`}>
                        {isIncrementDelivery ? <ExpandLessOutlined /> : <ExpandMoreOutlined />} {order.deliveredChange}%
                    </h1>
                </span>
            </div>

            {/* Total Cancelled Card */}

            <div className='shadow-md h-32 w-full rounded bg-gray-900 p-2'>
                <IconWrapper className='mb-1'>
                    <Avatar src={Cancel} style={{ cursor: "pointer" }} />
                </IconWrapper>
                <h1 className='font-semibold text-[1.1rem] mb-2'>Total Cancelled</h1>
                <span className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>{order.cancelledOrders}</h1>
                    <h1 className={`flex items-center text-[1rem] ${isIncrementCancel ? 'text-green-500' : 'text-red-500'}`}>
                        {isIncrementCancel ? <ExpandLessOutlined /> : <ExpandMoreOutlined />} {order.cancelledChange}%
                    </h1>
                </span>
            </div>

            {/* Total Increment Card */}

            <div className='shadow-md h-32 w-full rounded bg-gray-900 p-2'>
                <IconWrapper className='mb-1'>
                    <Avatar src={Revenue} style={{ cursor: "pointer" }} />
                </IconWrapper>
                <h1 className='font-semibold text-[1.1rem] mb-2'>Total Revenue</h1>
                <span className='flex justify-between'>
                    <h1 className='font-semibold text-2xl'>${order.totalRevenueGenerated}</h1>
                    <h1 className={`flex items-center text-[1rem] ${isIncrementRevenue ? 'text-green-500' : 'text-red-500'}`}>
                        {isIncrementRevenue ? <ExpandLessOutlined /> : <ExpandMoreOutlined />} {(order.revenueChange / order.totalRevenueGenerated) * 100}%
                    </h1>
                </span>
            </div>
        </div>
    );
}

export default OrderDetails;
