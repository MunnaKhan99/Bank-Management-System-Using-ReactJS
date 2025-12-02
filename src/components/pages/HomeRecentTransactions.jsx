import React from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import styles from "./style/homeRecentTransaction.module.css"
import { useNavigate } from 'react-router';
const HomeRecentTransactions = ({ transactions, currentUser }) => {
    console.log(transactions);
    const navigate = useNavigate();

    const userTransactions = transactions.filter(tx => tx.user === currentUser.email)
        .slice(-5)
        .reverse();
    return (
        <div className={styles['recent-container']}>

            Header Row
            <div className={styles['recent-header']}>
                <h3 className={styles['recent-title']}>Recent Transactions</h3>
                <button className={styles['recent-view-btn']} onClick={()=>navigate("/transaction")}>View All</button>
            </div>

            {/* Transaction List */}
            <div className={styles['recent-list']}>
                {
                    userTransactions.length === 0 && (
                        <p>No Recent transaction found</p>
                    )
                }

                {/* Transaction Item */}
                {userTransactions.map((tx, index) => (
                    <div key={index} className={styles['recent-item']}>

                        <div className={styles['recent-left']}>
                            {tx.type === "Deposit" ? (
                                <FaArrowDown className={`${styles['recent-icon']} ${styles['deposit-icon']}`} />
                            ) : (
                                <FaArrowUp className={`${styles['recent-icon']} ${styles['withdraw-icon']}`} />
                            )}

                            <div>
                                <p className={styles['recent-name']}>{tx.description}</p>
                                <p className={styles['recent-date']}>{tx.Date}</p>
                            </div>
                        </div>

                        <p
                            className={`${styles['recent-amount']} ${tx.type === "Deposit"
                                    ? styles['deposit-amount']
                                    : styles['withdraw-amount']
                                }`}
                        >
                            {tx.type === "Deposit" ? "+ $" : "- $"}
                            {tx.amount}
                        </p>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default HomeRecentTransactions;
