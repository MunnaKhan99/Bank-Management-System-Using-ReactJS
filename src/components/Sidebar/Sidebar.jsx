import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { LuCircleArrowUp, LuCircleArrowDown } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import "./sidebar.css"
import { useNavigate } from 'react-router';

const Sidebar = ({ handleLogout }) => {

    const navigate = useNavigate()

    return (
        <div className="sidebar">

            <div className="sidebar-header" onClick={() => navigate("/")}>
                <FaBuilding size="50px" color='white' className='sidebar-logo' />
                <span className="sidebar-title">FinBank</span>
            </div>

            <div className="sidebar-item" onClick={() => navigate("/")}>
                <MdOutlineDashboard color="blue" className="sidebar-icon" />
                <span>Dashboard</span>
            </div>

            <div className="sidebar-item" onClick={() => navigate("/deposit")}>
                <LuCircleArrowDown color="blue" className="sidebar-icon" />
                <span>Deposit</span>
            </div>

            <div className="sidebar-item" onClick={() => navigate("/withdraw")}>
                <LuCircleArrowUp color="blue" className="sidebar-icon" />
                <span>Withdraw</span>
            </div>

            <div className="sidebar-item" onClick={() => navigate("/transaction")}>
                <FaFileInvoiceDollar color="blue" className='sidebar-icon' />
                <span>Transactions</span>
            </div>

            <div className="sidebar-item logout" onClick={handleLogout}>
                <FiLogOut color="red" className="sidebar-icon" />
                <span>Logout</span>
            </div>

        </div>
    );
};

export default Sidebar;
