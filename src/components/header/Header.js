import React from 'react'
import image from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import './Header.css';
import { AppBar, ButtonGroup, Button, Stack, IconButton, Avatar, ThemeProvider, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
    palette: {
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        color: {
            white: '#fff',
            bg: '#01284D',
        }
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        "&.MuiButtonBase-root.MuiButton-root": {
            color: "#fff",
            textTransform: 'none',
            fontSize: 'calc(8px + 1vmin)',
        },
    }
}));

function Component() {
    const classes = useStyles();
    return (
        <Stack direction="row" spacing={2} justifyContent='space-around' alignItems='center'>
            <img src={image} alt='logo' style={{ width: '7vw' }} />
            <ButtonGroup variant='link' aria-label="Basic button group">
                <Button className={classes.root}>Home</Button>
                <Button className={classes.root}>Showtimes</Button>
                <Button className={classes.root}>About Us</Button>
                <Button className={classes.root}>Contact</Button>
                <Button className={classes.root}>Notice</Button>
                <Button className={classes.root}>More</Button>
            </ButtonGroup>
            <IconButton sx={{ p: 0 }}>
                <Avatar alt="User Icon" src={avatar} />
            </IconButton>
        </Stack>
    )
}

const Header = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar sx={{ backgroundColor: 'color.bg' }}>
                <Component />
            </AppBar>
        </ThemeProvider>
    )
}

export default Header