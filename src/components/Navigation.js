import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Navbar, Nav, Button} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../redux/authReducer'

export const Navigation = () => {  

  const {userAuth} = useSelector((state) => state.authReducer)
  const dispatch = useDispatch() 

  return (
        <Navbar bg="dark" variant="dark"  /*expand="lg"*/>            
        <Container>              
            <Navbar.Brand><NavLink to="/">TEST ME</NavLink></Navbar.Brand>                                            
            { userAuth.isAuthenticated ?
            <>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />                                                                              
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/AdmUsersPage">Пользователи</NavLink>
                        <NavLink className="nav-link" to="/AdmTestPage">Тесты</NavLink>                 
                    </Nav>                       
                </Navbar.Collapse>                   
                <div className="justify-content-end">                    
                <Button 
                    variant="outline-secondary"  
                    onClick={()=> {dispatch(logOut())}}                                                         
                >Log Out
                </Button>                                                 
            </div> 
            </>
            :
            <div className="justify-content-end">                   
                <Link to="/AuthPage" className="btn btn-outline-secondary">Log In</Link>                   
            </div> 
            }                 
        </Container>
    </Navbar>    
  )
}