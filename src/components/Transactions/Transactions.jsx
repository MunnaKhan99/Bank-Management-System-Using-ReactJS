import React from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import styles from "./transaction.module.css";

const Transactions = () => {
    return (
        <div>

            {/* Back to Dashboard */}
            <div className={styles.backLink}>Back to Dashboard</div>

            <div className={styles.container}>

                {/* HEADER */}
                <div className={styles.header}>

                    {/* LEFT SIDE */}
                    <div className={styles.headerLeft}>
                        <div className={styles.headerText}>
                            <FaExchangeAlt className={styles.headerIcon} size="40px" />
                            <span>Transaction History</span>
                        </div>

                        <p className={styles.subtitle}>View all your recent transactions</p>
                    </div>

                    {/* RIGHT SIDE (Filter buttons) */}
                    <div className={styles.filterBar}>
                        <button className={styles.filterBtn}>All</button>
                        <button className={styles.filterBtn}>Deposit</button>
                        <button className={styles.filterBtn}>Withdraw</button>
                    </div>
                </div>

                {/* TRANSACTION LIST */}
                <div className={styles.list}>

                    <div className={styles.item}>
                        <div className={styles.itemLeft}>
                            <FaArrowDown className={`${styles.icon} ${styles.depositIcon}`} />
                            <div>
                                <p className={styles.name}>Deposit</p>
                                <p className={styles.date}>15 Feb 2025</p>
                            </div>
                        </div>
                        <p className={`${styles.amount} ${styles.depositAmount}`}>+ $50.00</p>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.itemLeft}>
                            <FaArrowUp className={`${styles.icon} ${styles.withdrawIcon}`} />
                            <div>
                                <p className={styles.name}>Withdraw</p>
                                <p className={styles.date}>14 Feb 2025</p>
                            </div>
                        </div>
                        <p className={`${styles.amount} ${styles.withdrawAmount}`}>- $20.00</p>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.itemLeft}>
                            <FaArrowDown className={`${styles.icon} ${styles.depositIcon}`} />
                            <div>
                                <p className={styles.name}>Deposit</p>
                                <p className={styles.date}>12 Feb 2025</p>
                            </div>
                        </div>
                        <p className={`${styles.amount} ${styles.depositAmount}`}>+ $90.00</p>
                    </div>

                </div>
                <hr className={styles.horaizontalLine} />
                <div className={styles.totalTransaction}>
                    <p>Total Transaction</p>
                    <p>7</p>
                </div>
            </div>



        </div>
    );
};

export default Transactions;
