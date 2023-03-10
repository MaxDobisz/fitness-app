import { Button, styled } from '@mui/material';

export const NavbarButton = styled(Button)(({ theme }) => ({
    fontSize: '1.2rem',
    backgroundColor: theme.palette.richBlack1,
    margin: '0 1rem',
    padding: '.2em 1em',
    border: `2px solid ${theme.palette.silver}`,
    borderRadius: '10px',
    '&:hover': {
        backgroundColor: theme.palette.darkBlue,
    },
    boxShadow: 'rgba(255, 255, 255, 0.25) 0px 13px 27px -5px, rgba(255, 255, 255, 0.3) 0px 8px 16px -8px'
}));

