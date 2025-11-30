import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

import { LuCircleArrowUp } from "react-icons/lu";
import { LuCircleArrowDown } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { FaFileInvoiceDollar } from "react-icons/fa6";

// import logo from '../../assets/government.png'
import "./sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar-header">
                <FaBuilding size="50px" color='white' className='sidebar-logo'/>

                <span className="sidebar-title">FinBank</span>
            </div>

            <div className="sidebar-item">
                <MdOutlineDashboard color="blue" className="sidebar-icon" />
                <span>Dashboard</span>
            </div>

            <div className="sidebar-item">
                <LuCircleArrowDown color="blue" className="sidebar-icon" />
                <span>Deposit</span>
            </div>

            <div className="sidebar-item">
                <LuCircleArrowUp color="blue" className="sidebar-icon" />
                <span>Withdraw</span>
            </div>

            <div className="sidebar-item"><FaFileInvoiceDollar color="blue" className='sidebar-icon' />
                <span>Transactions</span>
            </div>

            <div className="sidebar-item logout">
                <FiLogOut color="red"className="sidebar-icon " />
                <span>Logout</span>
            </div>

        </div>
    );
};

export default Sidebar;