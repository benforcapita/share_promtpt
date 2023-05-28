'use client'
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { colors } from '@/theme';

export default function Header() {
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget as unknown as Element);
    };
    

    const handleClose = () => {
        setAnchorEl(null);
    };
    const desktopNav = (
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/" passHref>
                <MenuItem>Home</MenuItem>
            </Link>
            <Link href="/about" passHref>
                <MenuItem>About</MenuItem>
            </Link>
            <Link href="/contact" passHref>
                <MenuItem>Contact</MenuItem>
            </Link>
        </Box>
    );

    const mobileNav = (
        <div>
            <IconButton
               id="menu-button"
               aria-controls="menu"
               aria-haspopup="true"
               aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
               onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
            >
                <Link href="/" passHref>
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link href="/about" passHref>
                    <MenuItem onClick={handleClose}>About</MenuItem>
                </Link>
                <Link href="/contact" passHref>
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                </Link>
            </Menu>
        </div>
    );

    return (
        <Box component="header" sx={{ p: 5, backgroundColor: '#79abcc', color:  colors.palette.primary.main, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderEndEndRadius:'100px', borderStartEndRadius:'100px' }}>
            <Box sx={{ display: 'flex', gap: 2 }} flexDirection={'column'}>
            <h1 className="text-2xl font-bold">Wordsmith&apos;s Odyssey: </h1>
            <h2>Chronicles of an Aspiring Scribe</h2>
            </Box>
            {isMobile ? mobileNav : desktopNav}
        </Box>
    );
}
