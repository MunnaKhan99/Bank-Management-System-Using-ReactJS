import React from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import styles from "./style/homeRecentTransaction.module.css"
const HomeRecentTransactions = () => {
    return (
        <div className={styles['recent-container']}>

            {/* Header Row */}
            <div className={styles['recent-header']}>
                <h3 className={styles['recent-title']}>Recent Transactions</h3>
                <button className={styles['recent-view-btn']}>View All</button>
            </div>

            {/* Transaction List */}
            <div className={styles['recent-list']}>

                {/* Transaction Item */}
                <div className={styles['recent-item']}>
                    <div className={styles['recent-left']}>
                        <FaArrowDown className={styles['recent-icon deposit-icon']}/>
                        <div>
                            <p className={styles['recent-name']}>Deposit</p>
                            <p className={styles['recent-date']}>12 Feb 2025</p>
                        </div>
                    </div>
                    <p className={styles['recent-amount deposit-amount']}>+ $20.00</p>
                </div>

                <div className={styles['recent-item']}>
                    <div className={styles['recent-left']}>
                        <FaArrowUp className={styles['recent-icon withdraw-icon']} />
                        <div>
                            <p className={styles['recent-name']}>Withdraw</p>
                            <p className={styles['recent-date']}>10 Feb 2025</p>
                        </div>
                    </div>
                    <p className={styles['recent-amount withdraw-amount']}>- $10.00</p>
                </div>

            </div>
        </div>
    );
};

export default HomeRecentTransactions;
