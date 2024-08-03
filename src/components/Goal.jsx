import React from 'react'
import { alpha, Avatar, styled } from '@mui/material';
import menu from '../assets/menu.png'
import food from '../assets/food-platter.png'
import aim from '../assets/aim.png'



const IconWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    '& svg': {
        backgroundColor: theme.palette.common.white, // Set background color to white
        borderRadius: '50%',
        padding: theme.spacing(3), // Increase padding for larger icons
        fontSize: '4rem', // Increase font size for larger icons
        color: 'red',
    },
}));


const Goal = () => {
    return (
        <div className=''>

            <div className='flex '>
                <Avatar src={aim} />
                <p>Goal</p>
            </div>

            <div>
                <Avatar src={food} />
            </div>
            <div>
                <Avatar src={menu} />
            </div>

        </div >
    )
}

export default Goal
