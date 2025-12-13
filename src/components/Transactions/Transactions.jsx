import React, { useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import styles from "./transaction.module.css";

const Transactions = ({ transactions, currentUser }) => {

    const [filterType, setFilterType] = useState("ALL");

    const userTransactions = transactions.filter(
        tx => tx.user === currentUser.email
    );

    const filteredTransactions = userTransactions.filter(tx => {
        if (filterType === 'ALL') {
            return true;
        }
        return tx.type === filterType;
    });

    return (
        <div>

            <div className={styles.backLink}>Back to Dashboard</div>

            <div className={styles.container}>

                <div className={styles.header}>

                    <div className={styles.headerLeft}>
                        <div className={styles.headerText}>
                            <FaExchangeAlt className={styles.headerIcon} size="40px" />
                            <span>Transaction History</span>
                        </div>

                        <p className={styles.subtitle}>View all your recent transactions</p>
                    </div>

                    <div className={styles.filterBar}>
                        <button className={`${styles.filterBtn} ${filterType === "ALL" ? styles.active : ""}`} onClick={() => setFilterType("ALL")}>All</button>
                        <button className={`${styles.filterBtn} ${filterType === "Deposit" ? styles.active : ""}`} onClick={() => setFilterType("Deposit")}>Deposit</button>
                        <button className={`${styles.filterBtn} ${filterType === "Withdraw" ? styles.active : ""}`} onClick={() => setFilterType("Withdraw")}>Withdraw</button>
                    </div>
                </div>

                <div className={styles.list}>
                    {filteredTransactions.map((tx, index) => (
                        <div key={index} className={styles.item}>

                            <div className={styles.itemLeft}>

                                {tx.type === "Deposit" ? (
                                    <FaArrowDown className={`${styles.icon} ${styles.depositIcon}`} />
                                ) : (
                                    <FaArrowUp className={`${styles.icon} ${styles.withdrawIcon}`} />
                                )}

                                <div>
                                    <p className={styles.name}>
                                        {tx.description}
                                    </p>
                                    <p className={styles.Date}>{tx.Date}</p>
                                </div>

                            </div>

                            <p
                                className={`${styles.amount} ${tx.type === "Deposit"
                                    ? styles.depositAmount
                                    : styles.withdrawAmount
                                    }`}
                            >
                                {tx.type === "Deposit" ? "+ $" : "- $"}
                                {tx.amount}

                            </p>


                        </div>

                    ))}
                </div>

                <hr className={styles.horaizontalLine} />

                <div className={styles.totalTransaction}>
                    <p>Total Transaction</p>
                    <p>{filteredTransactions.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
