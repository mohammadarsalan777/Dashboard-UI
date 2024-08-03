import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'; // Import the icon
import MenuIcon from '@mui/icons-material/Menu'; // Use MenuIcon for the attractive menu icon
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import avatar from "../assets/avatar.jpg";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

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

const MobileIconWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Space out elements horizontally
    width: '100%',
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));

const MobileSearch = styled(Search)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='bg-gray-900 md:py-4 py-2 md:px-4 flex items-center justify-between fixed top-0 left-0 w-full  text-white shadow-lg z-50'>
            {isMobile ? (
                <MobileIconWrapper>
                    <AutoAwesomeMosaicIcon fontSize="large" className="mb:mr-7  mb-3 text-blue-400" />
                    <MobileSearch>
                        <SearchIconWrapper >
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </MobileSearch>
                    <IconButton
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleMenuClick}
                        color="inherit"
                    >
                        <Avatar src={avatar} style={{ marginRight: '8px' }} />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}

                    >
                        <MenuItem onClick={handleMenuClose}>
                            <EmailIcon style={{ marginRight: '8px' }} />
                            Email
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <SettingsIcon style={{ marginRight: '8px' }} />
                            Settings
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <NotificationsRoundedIcon style={{ marginRight: '8px' }} />
                            Notifications
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <Avatar src={avatar} style={{ marginRight: '8px' }} />
                            Profile
                        </MenuItem>
                    </Menu>
                </MobileIconWrapper>
            ) : (
                <>

                    <div className='flex items-center'>

                        <AutoAwesomeMosaicIcon fontSize="large" className="mr-7 mb-3 text-blue-400" />
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </div>
                    <IconWrapper>
                        <EmailIcon style={{ cursor: "pointer" }} />
                        <SettingsIcon style={{ cursor: "pointer" }} />
                        <NotificationsRoundedIcon style={{ cursor: "pointer" }} />
                        <Avatar src={avatar} style={{ cursor: "pointer" }} />
                    </IconWrapper>
                </>
            )}
        </div>
    );
};

export default Navbar;
