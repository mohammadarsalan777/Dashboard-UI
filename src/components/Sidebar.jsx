import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';

const SidebarContainer = styled('div')(({ theme }) => ({
    position: 'fixed',
    width: 60, // Width when sidebar is collapsed
    height: '100%',
    backgroundColor: '#111827', // bg-gray-900
    transition: 'width 0.4s',
    overflow: 'hidden',
    zIndex: theme.zIndex.drawer,
    '@media (max-width: 768px)': {
        display: 'none', // Hide sidebar in mobile view
    },
    '&:hover': {
        width: 240, // Width when sidebar is expanded
    },
    '& .MuiListItemText-root': {
        opacity: 0,
        transition: 'opacity 0.5s',
        color: 'white', // Set text color to white
    },
    '&:hover .MuiListItemText-root': {
        opacity: 1,
    },
    '& .MuiDivider-root': {
        margin: theme.spacing(2, 0),
    },
}));

const MobileSidebarContainer = styled('div')(({ theme, open }) => ({
    position: 'fixed',
    bottom: open ? 0 : '-100%',
    width: '100%',
    backgroundColor: '#111827', // bg-gray-900
    zIndex: theme.zIndex.drawer + 1,
    transition: 'bottom 0.3s',
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 769px)': {
        display: 'none', // Hide in desktop view
    },
}));

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
    color: active ? '#60a5fa' : 'white', // Text color for active and inactive state
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: theme.spacing(2.5), // Fixed padding to keep icons in place
    '&:hover': {
        color: '#60a5fa',
    },
    '& .MuiListItemIcon-root': {
        color: active ? '#60a5fa' : 'white', // Icon color for active and inactive state
        minWidth: 40, // Fixed width to keep icons in place
    },
}));

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleListItemClick = (index) => {
        setActiveIndex(index);
        if (window.innerWidth <= 768) {
            setIsSidebarOpen(false);
        }
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    return (
        <div className='mt-[-20px]'>
            <SidebarContainer>
                <List>
                    <StyledListItem button active={activeIndex === 0} onClick={() => handleListItemClick(0)}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </StyledListItem>
                    <StyledListItem button active={activeIndex === 1} onClick={() => handleListItemClick(1)}>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Activity" />
                    </StyledListItem>
                    <StyledListItem button active={activeIndex === 2} onClick={() => handleListItemClick(2)}>
                        <ListItemIcon>
                            <AssignmentTurnedInIcon />
                        </ListItemIcon>
                        <ListItemText primary="Checklists" />
                    </StyledListItem>
                    <StyledListItem button active={activeIndex === 3} onClick={() => handleListItemClick(3)}>
                        <ListItemIcon>
                            <BusinessCenterRoundedIcon />
                        </ListItemIcon>
                        <ListItemText style={{ position: 'fixed', marginLeft: '40px', marginTop: '8px' }} primary="Total Amount" />
                    </StyledListItem>
                    <StyledListItem button active={activeIndex === 4} onClick={() => handleListItemClick(4)}>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Carts" />
                    </StyledListItem>
                </List>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Divider />
                <List style={{ marginTop: 'auto' }}>
                    <StyledListItem button active={activeIndex === 5} onClick={() => handleListItemClick(5)}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </StyledListItem>
                </List>
            </SidebarContainer>
            <IconButton
                onClick={handleSidebarToggle}
                color="inherit"
                className="fixed bottom-4 right-4 z-[1301] bg-white text-black rounded-full p-3 md:hidden"
                style={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    zIndex: 1301,
                    backgroundColor: 'white',
                    color: "black",
                    borderRadius: '50%',
                    padding: '12px',

                }}
            >
                <MenuIcon />
            </IconButton>
            <MobileSidebarContainer open={isSidebarOpen}>
                <IconButton onClick={handleSidebarToggle} color="inherit" style={{ alignSelf: 'flex-center', margin: '16px' }}>
                    <ExpandMoreTwoToneIcon />
                </IconButton>
                <List>
                    <StyledListItem button active={activeIndex === 0} onClick={() => handleListItemClick(0)}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </StyledListItem>
                    <StyledListItem button active={activeIndex === 1} onClick={() => handleListItemClick(1)}>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Activity" />
                    </StyledListItem>
                    <StyledListItem button active={activeIndex === 2} onClick={() => handleListItemClick(2)}>
                        <ListItemIcon>
                            <AssignmentTurnedInIcon />
                        </ListItemIcon>
                        <ListItemText primary="Checklists" />
                    </StyledListItem>
                    <StyledListItem button active={activeIndex === 3} onClick={() => handleListItemClick(3)}>
                        <ListItemIcon>
                            <BusinessCenterRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Total Amount" />
                    </StyledListItem>
                    <StyledListItem button active={activeIndex === 4} onClick={() => handleListItemClick(4)}>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Carts" />
                    </StyledListItem>
                    <Divider />
                    <StyledListItem button active={activeIndex === 5} onClick={() => handleListItemClick(5)}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </StyledListItem>
                </List>
            </MobileSidebarContainer>
        </div>
    );
};

export default Sidebar;
