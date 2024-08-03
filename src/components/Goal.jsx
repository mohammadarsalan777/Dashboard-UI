import React from 'react'
import { alpha, Avatar, styled } from '@mui/material';
import menu from '../assets/menu.png'
import food from '../assets/food-platter.png'
import aim from '../assets/aim.png'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';


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


const Goal = () => {
    return (
        <div className=''>

            <div className='flex gap-3 my-6 justify-between'>
                <span className='flex gap-3'>
                    <Avatar src={aim} />
                    <p className=' text-2xl'>Goals</p>
                </span>

                <IconWrapper >
                    <ExpandCircleDownIcon />
                </IconWrapper>

            </div>

            <div className='flex gap-3 my-6 justify-between'>

                <span className='flex gap-3'>

                    <Avatar src={food} />
                    <p className=' text-2xl'>Popular Dishes</p>
                </span>
                <IconWrapper >
                    <ExpandCircleDownIcon />
                </IconWrapper>
            </div>
            <div className='flex gap-3 my-6 justify-between'>

                <span className='flex gap-3'>
                    <Avatar src={menu} />
                    <p className=' text-2xl'>Menus</p>
                </span>
                <IconWrapper  >
                    <ExpandCircleDownIcon />
                </IconWrapper>
            </div>

        </div >
    )
}

export default Goal
