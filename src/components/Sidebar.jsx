import React from 'react'
import makeStyles from '@mui/styles/makeStyles';
import {Container, Typography} from "@mui/material";
import {HelpOutline, Home, LibraryBooks, People} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import NavLink from './NavLink'


const useStyles = makeStyles((theme)=>({
    container : {
        height : "100vh",
        background: theme.palette.mainColor.main,
        color: "#555",
        borderRight: "1px solid #ece7e7",
        position: "sticky",
        top: "0",
        paddingTop: theme.spacing(10)
    },
    menuItem : {
        padding:"8px",
        display:"flex",
        alignItems: "center",
        fontSize:"18px",
        borderRadius: "5px",
        cursor : "pointer",
        fontWeight : "600",
        '&:hover': {
            background: "#efefef" ,
         },
         '&:active': {
            background: "#efefef" ,
         },
    },
    menuItemIcon : {
        marginRight:"10px"
    },
}))


export default function Navbar() {

    const classes = useStyles();
    const location = useLocation();
    const { pathname } = location;

    return (
            <Container className={classes.container}>
                <NavLink to="/" pathname={pathname}> 
                    <div className={classes.menuItem}>
                        <Home className={classes.menuItemIcon}/>
                        <Typography className={classes.text}>Домашняя страница</Typography>
                    </div>
                </NavLink>
                <NavLink to="/users" pathname={pathname}> 
                    <div className={classes.menuItem}>
                        <People className={classes.menuItemIcon}/>
                        <Typography className={classes.text}>Пользователи</Typography>
                    </div>
                </NavLink>
                <NavLink to="/tests" pathname={pathname}> 
                    <div className={classes.menuItem}>
                        <HelpOutline className={classes.menuItemIcon}/>
                        <Typography className={classes.text}>Тесты</Typography>
                    </div>
                </NavLink>
                <NavLink to="/dictionary" pathname={pathname}> 
                    <div className={classes.menuItem}>
                        <LibraryBooks className={classes.menuItemIcon}/>
                        <Typography className={classes.text}>Справочники</Typography>
                    </div>
                </NavLink>
            </Container>
    )
}
