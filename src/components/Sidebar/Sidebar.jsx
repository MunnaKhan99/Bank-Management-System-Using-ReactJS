import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

import { LuCircleArrowUp } from "react-icons/lu";
import { LuCircleArrowDown } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { FaFileInvoiceDollar } from "react-icons/fa6";

// import logo from '../../assets/government.png'
import "./sidebar.css"
import { useNavigate } from 'react-router';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate("/");
    }
    const handleNavigateDashboard = () => {
        navigate("/")
    }

    const handleNavigateDeposite = () => {
        navigate("/deposit")
    }
    const handleNavigateWithdraw = () => {
        navigate("/withdraw")
    }
    const handleNavigateTransaction = () => {
        navigate("/transaction")
    }
    const handleNavigateLogout = () => {
        navigate("/login")
    }

    return (
        <div className="sidebar">

            <div className="sidebar-header" onClick={handleNavigateHome}>
                <FaBuilding size="50px" color='white' className='sidebar-logo' />

                <span className="sidebar-title">FinBank</span>
            </div>

            <div className="sidebar-item" onClick={handleNavigateDashboard}>
                <MdOutlineDashboard color="blue" className="sidebar-icon" />
                <span>Dashboard</span>
            </div>

            <div className="sidebar-item" onClick={handleNavigateDeposite}>
                <LuCircleArrowDown color="blue" className="sidebar-icon"  />
                <span>Deposit</span>
            </div>

            <div className="sidebar-item" onClick={handleNavigateWithdraw}>
                <LuCircleArrowUp color="blue" className="sidebar-icon"  />
                <span>Withdraw</span>
            </div>

            <div className="sidebar-item" onClick={handleNavigateTransaction} ><FaFileInvoiceDollar color="blue" className='sidebar-icon' />
                <span>Transactions</span>
            </div>

            <div className="sidebar-item logout" onClick={handleNavigateLogout} >
                <FiLogOut color="red" className="sidebar-icon " />
                <span>Logout</span>
            </div>

        </div>
    );
};

export default Sidebar;