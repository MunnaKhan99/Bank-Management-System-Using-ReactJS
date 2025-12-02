import React from 'react';
import { LuCircleArrowUp } from "react-icons/lu";
import { LuCircleArrowDown } from "react-icons/lu";
// import "./style/homeTotalBalance.module.css"
import styles from "./style/homeTotalBalance.module.css"
import { useNavigate } from 'react-router';
const HomeTotalBalance = ({ currentUser }) => {
    const navigate = useNavigate();
    console.log(currentUser);
    const { balance } = currentUser;
    return (
        <div className={styles['home-total-balance-container']}>
            <p className={styles['total-balance-title']}>Total Balance</p>
            <p className={styles['total-balance']}>${balance}</p>
            <div>
                <button className={styles['deposit-btn']} onClick={()=>navigate("/deposit")}>
                    <LuCircleArrowDown color="white" className={styles["deposit-icon"]} />
                    <span>Deposit</span>
                </button>

                <button className={styles['withdraw-button']} onClick={()=>navigate("/withdraw")}>
                    <LuCircleArrowUp color="white" className="withdraw-icon" />
                    <span>Withdraw</span>
                </button>
            </div>
        </div>
    );
};

export default HomeTotalBalance;