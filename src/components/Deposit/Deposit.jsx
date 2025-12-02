import React, { useState } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { MdRequestPage } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";


import styles from './deposit.module.css';
import { useNavigate } from 'react-router';

const Deposit = ({ handleDeposit }) => {
    const navigate = useNavigate();
    const [depositAmount, setDepositAmount] = useState(0);
    const [description, setDescription] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();


        handleDeposit(depositAmount, description)

        setDepositAmount("");
        setDescription("");

    }
    const handleDepoCancle = (e) => {
        e.preventDefault();
        setDepositAmount("");
        setDescription("");
    }
    const handleNavigate = () => {
        navigate("/")
    }
    return (
        <div>
            <div className={styles.backLink} onClick={handleNavigate}><FaArrowLeft /><span>Back to Dashboard</span></div>

            <div className={styles.depositContainer}>
                <div className={styles.depositHeader}>
                    <FaDollarSign className={styles.depositIcon} size="45px" />
                    <span>Deposit Funds</span>
                </div>

                <p className={styles.depositSubtitle}>Add money to your account</p>

                <form className={styles.depositForm} onSubmit={handleSubmit}>
                    {/* Amount input */}
                    <div className={styles.inputField}>
                        <span className={styles.fieldLegend}>Amount</span>

                        <div className={styles.inputWrapper}>
                            <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 1v22"></path>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </g>
                            </svg>

                            <input
                                type="number"
                                placeholder="Initial Amount"
                                min="1"
                                step="0.01"
                                required
                                className={styles.inputBox}

                                value={depositAmount}
                                onChange={(e) => setDepositAmount(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Textarea */}
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
                        <button type='button' className={styles.cancelBtn} onClick={handleDepoCancle}>Cancel</button>
                        <button type='submit' className={styles.depositBtn} >Deposit</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Deposit;
