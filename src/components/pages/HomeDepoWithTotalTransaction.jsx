import React from 'react';
import styles from "./style/homeDepoTreansaction.module.css"
import { LuCircleArrowUp } from "react-icons/lu";
import { LuCircleArrowDown } from "react-icons/lu";
import { FaFileInvoiceDollar } from "react-icons/fa6";

const HomeDepoWithTotalTransaction = ({ totalDeposit,totalWithdraw,totalTransaction }) => {
    return (
        <div className={styles['home-depo-withdraw-container']}>

            <div className={styles['home-depo-card']}>
                <div className={styles['home-depo-top-item']}>
                    <LuCircleArrowDown color="green" className={styles["deposit-icon"]} />
                    <span>Deposit</span>
                </div>
                <p className={styles['home-depo-amount']}>${totalDeposit}</p>
            </div>

            <div className={styles['home-depo-card']}>
                <div className={styles['home-depo-top-item']}>
                    <LuCircleArrowUp color="red" className={styles["withdraw-icon"]} />
                    <span>Withdraw</span>
                </div>
                <p className={styles['home-depo-amount']}>${totalWithdraw}</p>
            </div>

            <div className={styles['home-depo-card']}>
                <div className={styles['home-depo-top-item']}>
                    <FaFileInvoiceDollar color="blue" className={styles['transaction-icon']} />
                    <span>Total Transaction</span>
                </div>
                <p className={styles['home-depo-amount]']}>{totalTransaction}</p>
            </div>

        </div>
    );
};

export default HomeDepoWithTotalTransaction;