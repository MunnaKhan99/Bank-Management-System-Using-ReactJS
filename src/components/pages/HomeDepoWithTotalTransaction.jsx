import React from 'react';
import styles from "./style/homeDepoTreansaction.module.css"
import { LuCircleArrowUp } from "react-icons/lu";
import { LuCircleArrowDown } from "react-icons/lu";
import { FaFileInvoiceDollar } from "react-icons/fa6";

const HomeDepoWithTotalTransaction = () => {
    return (
        <div className={styles['home-depo-withdraw-container']}>
            <div className={styles['home-depo-card']}>
                <div className={styles['home-depo-top-item']}>
                    <LuCircleArrowDown color="green" className="deposit-icon" />
                    <span>Deposit</span>
                </div>
                <p className={styles['home-depo-amount']}>$9.97</p>
            </div>
            <div className={styles['home-depo-card']}>
                <div className={styles['home-depo-top-item']}>
                    <LuCircleArrowUp color="red" className="withdraw-icon" />
                    <span>Withdraw</span>
                </div>
                <p className={styles['home-depo-amount']}>$9.97</p>
            </div>
            <div className={styles['home-depo-card']}>
                <div className={styles['home-depo-top-item']}>
                    <FaFileInvoiceDollar color="blue" className={styles['transaction-icon']}/>
                    <span>Total Transaction</span>
                </div>
                <p className={styles['home-depo-amount]']}>$9.97</p>
            </div>

        </div>
    );
};

export default HomeDepoWithTotalTransaction;