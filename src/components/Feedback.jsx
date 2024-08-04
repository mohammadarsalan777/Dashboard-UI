import React from 'react';
import { feedbacks } from './feedback';
import { alpha, Avatar, Divider, styled } from '@mui/material';
import Rating from '@mui/material/Rating';

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

const Feedback = () => {
    return (
        <div className='h-[25rem] md:h-[23rem] overflow-y-auto p-2'>
            <style jsx>{`
                ::-webkit-scrollbar {
                    width: 4px;
                }
                ::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 6px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
            {feedbacks.map((element, i) => (
                <div key={i} className='mx-1 my-4'>
                    <IconWrapper>
                        <Avatar src={element.avatar} />
                        <p className='font-semibold text-xl'>{element.name}</p>
                    </IconWrapper>
                    <Rating
                        name="read-only"
                        value={element.rating}
                        readOnly
                    />
                    <p className='mb-2 mt-1 text-gray-500'>{element.feedback}</p>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                </div>
            ))}
        </div>
    );
};

export default Feedback;
