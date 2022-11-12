import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const Pryvetrout = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner
        color="info"
        aria-label="Info spinner example"
      />
      
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace>

        </Navigate>
    }
    return children;
};

export default Pryvetrout;