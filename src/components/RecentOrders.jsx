import React, { useState } from 'react';
import { orders } from './orderList';
import { alpha, Avatar, styled } from '@mui/material';

const IconWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    '& svg': {
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        borderRadius: '50%',
        padding: theme.spacing(1),
        fontSize: '2.5rem',
        color: 'gray',
    },
}));

const statusColors = {
    delivered: 'bg-green-900 text-green-400',
    pending: 'bg-blue-900 text-blue-500',
    cancelled: 'bg-red-950 text-red-400',
};


const RecentOrders = () => {
    // Number of items to display initially and on load more
    const [visibleCount, setVisibleCount] = useState(5);
    const [showAll, setShowAll] = useState(false);

    const handleLoadMore = () => {
        // Increase the number of visible items by 5
        setVisibleCount(prevCount => Math.min(prevCount + 5, orders.length));
    };

    const handleShowLess = () => {
        // Decrease the number of visible items to 5
        setVisibleCount(5);
        setShowAll(false);
    };

    const displayedOrders = orders.slice(0, visibleCount);


    return (
        <div>
            <div className='grid grid-cols-5 text-[15px] mb-3'>
                <p className='col-span-2'>Customer</p>
                <p className='col-span-1'>Order No.</p>
                <p className='col-span-1 ml-2 md:ml-0'>Amount</p>
                <p className='col-span-1 ml-6'>Status</p>
            </div>
            <hr className='h-0 text-gray-500' />

            {displayedOrders.map((element) => (
                <div key={element.orderNo} className='grid grid-cols-5 align-middle text-[15px] my-2'>
                    <p className='col-span-2'>
                        <IconWrapper>
                            <Avatar src={element.avatar} />
                            {element.customer}
                        </IconWrapper>
                    </p>
                    <p className='col-span-1 p-1'>{element.orderNo}</p>
                    <p className='col-span-1 p-1 ml-1 md:ml-0'>${element.amount.toFixed(2)}</p>
                    <p className={`col-span-1 text-center rounded-3xl h-6 mt-1 md:w-[60%] ${statusColors[element.status]}`}>
                        {element.status}
                    </p>
                </div>
            ))}

            <div className='text-center mt-4'>
                {!showAll && visibleCount < orders.length && (
                    <button
                        onClick={handleLoadMore}
                        className='px-4 py-2 border hover:bg-gray-950 outline-none hover:border-none text-white rounded'
                    >
                        Load More
                    </button>
                )}
                {showAll && (
                    <button
                        onClick={handleShowLess}
                        className='px-4 py-2 border hover:bg-gray-950 outline-none hover:border-none text-white rounded'
                    >
                        Show Less
                    </button>
                )}
                {!showAll && visibleCount >= orders.length && (
                    <button
                        onClick={() => setShowAll(true)}
                        className='px-4 py-2 border hover:bg-gray-950 outline-none hover:border-none text-white rounded'
                    >
                        Shown All
                    </button>
                )}
            </div>
        </div>
    );
}

export default RecentOrders;
