import {ToastContainer, Toast, CloseButton } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { clearError } from '../redux/authReducer'
import { useDispatch } from 'react-redux';

export const ErrorMessage = (props) => {

    const [show,setShow] = useState(false);
    const dispatch = useDispatch()       
    const setClose = () => dispatch(clearError())                                       

    useEffect(()=>{
        props.error ? setShow(true) : setShow(false)
    },[props.error])

  return (  
    <ToastContainer position="top-center" className="mt-6">
        <Toast  show={show}  bg="danger" delay={3000} autohide onClose={setClose}>            
            <Toast.Body>                                
                    {props.error}
                    <CloseButton onClick={setClose}/>                                                 
            </Toast.Body>   
        </Toast>
    </ToastContainer>
  )
}