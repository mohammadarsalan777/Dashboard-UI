import React, { useState } from 'react';
import { alpha, Avatar, styled } from '@mui/material';
import menu from '../assets/menu.png';
import food from '../assets/food-platter.png';
import aim from '../assets/aim.png';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

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
        transition: 'transform 0.5s',
    },
}));

const Accordion = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(2),
    cursor: 'pointer',
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#111827', // Set the background color
    '&:hover': {
        backgroundColor: alpha('#111827', 0.8), // Adjust hover background color if needed
    },
}));


const AccordionContent = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(1),
}));

const Goal = () => {
    const [openAccordion, setOpenAccordion] = useState(0);

    const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const accordionItems = [
        { id: 0, icon: aim, label: 'Goals', content: "Our goal is to provide an exceptional dining experience through outstanding culinary craftsmanship and warm hospitality. We prioritize sourcing fresh, local ingredients to create dishes that celebrate our region's rich flavors. Committed to sustainability, we support eco-friendly practices and local farmers. Our welcoming atmosphere invites guests to relax and enjoy memorable meals. We aim to be a cherished destination for food lovers, blending tradition with innovation. Whether for casual dining or special occasions, [Restaurant Name] is dedicated to making every visit delightful and enriching." },
        { id: 1, icon: food, label: 'Popular Dishes', content: "At our restaurant, we pride ourselves on offering a variety of popular dishes that showcase the best of our culinary expertise. Our signature dishes include a mouth-watering seafood paella, packed with fresh, locally-sourced seafood and aromatic saffron rice. Our succulent grilled steak, cooked to perfection, is another favorite, paired with seasonal vegetables and a choice of delectable sauces. For those who love comfort food, our creamy, rich mushroom risotto never disappoints. We also offer a delightful array of desserts, with our homemade tiramisu being a standout. Each dish is crafted with care to provide an unforgettable dining experience." },
        {
            id: 2,
            icon: menu,
            label: 'Menus',
            content: `Here are our five most popular dishes:\n1. Seafood Paella\n2. Grilled Steak\n3. Mushroom Risotto\n4. Chicken Alfredo\n5.      Tiramisu\n6. Chicken Biryani\n7. Mutton Pulao\n8. South Indian\n9.Chicken Periperri\n10. Shawarma`
        }
    ];

    return (
        <div>
            {accordionItems.map((item) => (
                <div key={item.id}>
                    <Accordion onClick={() => handleAccordionClick(item.id)}>
                        <span className='flex gap-3'>
                            <Avatar src={item.icon} />
                            <p className='text-2xl'>{item.label}</p>
                        </span>
                        <IconWrapper>
                            <ExpandCircleDownIcon
                                style={{
                                    transform:
                                        openAccordion === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                }}
                            />
                        </IconWrapper>
                    </Accordion>
                    {openAccordion === item.id && (
                        <AccordionContent>
                            <p className='text-justify p-3 bg-gray-900 rounded'>{item.content}</p>
                        </AccordionContent>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Goal;
