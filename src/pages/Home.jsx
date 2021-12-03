import React from 'react'
import {Typography} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import logo from '../img/logo.jpg'

const useStyles = makeStyles((theme)=>({
    container : {
        display: "flex",
        justifyContent : "space-arround",
        alignItems : "center",
        borderRadius: "30px",
        boxShadow:  "35px 35px 70px #b3b3b3, -35px -35px 70px #ffffff"
    },
    logo : {
        width: "300px",
        height: "300px",
        minwidth: "100px",
        minheight: "100px",
        borderRadius: "51px"
    }

}))

export default function Home() {
    const classes = useStyles();
    return (
            <>
                <div className={classes.container}>
                    <img src={logo} alt="" className={classes.logo}/>
                    <Typography variant="h2" style={{color:"#555"}}>Панель администратора</Typography>
                </div>
            </>
    )
}
