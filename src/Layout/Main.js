import React from 'react';
import { Outlet } from 'react-router-dom';
import Footerl from '../Pages/Shared/Footer/Footerl';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header>
            </Header>

            <Outlet>
                
            </Outlet>

            <Footerl>
            
            </Footerl>
        </div>
    );
};

export default Main;