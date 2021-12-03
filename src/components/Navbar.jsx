import React from 'react'
import {AppBar, Badge, Toolbar, Typography} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {AccountCircle, Email, Settings} from '@mui/icons-material';

const useStyles = makeStyles((theme)=>({
    toolbar : {
        display: "flex",
        justifyContent: "space-between",
        background: theme.palette.mainColor.main,
    },
    logo : {
        fontWeight : "600 !important" ,
    },
    icons : {
        display: "flex",
        alignItems : "center",
        cursor : "pointer"
    },
    icon : {
        marginRight : "10px"
    }
}))


export default function Navbar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                   <Typography className={classes.logo} variant='h5'>
                       TEST ME
                   </Typography>
                   <div className={classes.icons}>
                        <Badge badgeContent={2} color="secondary" className={classes.icon}>
                            <Email color="action"/>
                        </Badge>
                        <Settings color="action" className={classes.icon}/>
                        <AccountCircle color="action" className={classes.icon}/>
                   </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
