import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar/Sidebar';
// import Sidebar from '../components/Sidebar/Sidebar';

const Root = () => {
    return (
        <div style={{ display: "flex",height:"100vh",overflow:"block", backgroundColor: "#FFFFFF" }}>
            <Sidebar />
            <div style={{ flex: 1, padding: "20px",height:"100%",overflow:"auto", backgroundColor: "#E8F2FF" }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;