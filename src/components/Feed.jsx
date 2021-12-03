import React from 'react'
import makeStyles from '@mui/styles/makeStyles';
import { Container } from '@mui/material';
import Users from '../pages/Users/Users';
import Tests from '../pages/Tests';
import Dictionary from '../pages/Dictionary';
import Home from '../pages/Home';
import { Routes, Route } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
    container: {
        paddingTop: theme.spacing(10),
      },
}))

export default function Feed() {
    const classes = useStyles();
    return (
            <Container className={classes.container}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path="tests" element={<Tests />} />
                    <Route path="dictionary" element={<Dictionary />} />
                </Routes>
            </Container>
    )
}
