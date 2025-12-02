import React, { useState } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { MdRequestPage } from "react-icons/md";
import styles from './withdraw.module.css';
import { useNavigate } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";

const Withdraw = ({ handleWithdraw, currentUser }) => {
    const navigate = useNavigate();
    console.log(currentUser.balance);
    const { balance } = currentUser;
    const [withdraw, setWithdraw] = useState(0);
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleWithdraw(withdraw, description);

        setWithdraw("")
        setDescription("")
    }
    const handleWithCancel = (e) => {
        e.preventDefault();
        setWithdraw("");
        setDescription("");
    }
    return (
        <div>
            <div className={styles.backLink} onClick={() => navigate("/")}><FaArrowLeft /><span>Back to Dashboard</span></div>

            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <FaDollarSign className={styles.headerIcon} size="45px" />
                    <span>Withdraw Funds</span>
                </div>

                <p className={styles.subtitle}>Take money from your account</p>
                <p>Available Balance: ${balance}</p>

                <form className={styles.form} onSubmit={handleSubmit}>

                    {/* Amount */}
                    <div className={styles.inputField}>
                        <span className={styles.legend}>Amount</span>

                        <div className={styles.inputWrapper}>
                            <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 1v22"></path>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </g>
                            </svg>

                            <input
                                type="number"
                                placeholder="Enter Amount"
                                min="1"
                                step="0.01"
                                required
                                className={styles.inputBox}

                                value={withdraw}
                                onChange={(e) => setWithdraw(e.target.value)}

                            />
                        </div>
                    </div>

                    {/* Description textarea (same style as input) */}
                    <div className={styles.inputField}>
                        <span className={styles.legend}>Description</span>

                        <div className={styles.textAreaWrapper}>
                            <MdRequestPage className={styles.textAreaIcon} />

                            <textarea
                                className={styles.textArea}
                                placeholder="Add a description..."

                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className={styles.btnRow}>
                        <button type='button' className={styles.cancelBtn} onClick={handleWithCancel}>Cancel</button>
                        <button type='submit' className={styles.submitBtn} >Withdraw</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Withdraw;
