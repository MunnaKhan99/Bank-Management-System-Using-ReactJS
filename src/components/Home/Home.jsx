import React from 'react';
import HomeTotalBalance from '../pages/HomeTotalBalance';
import HomeDepoWithTotalTransaction from '../pages/HomeDepoWithTotalTransaction';
import HomeRecentTransactions from '../pages/HomeRecentTransactions';
import { useNavigate } from 'react-router';

const Home = ({ currentUser, transactions,totalTransaction, totalDeposit,totalWithdraw }) => {
    console.log("total deposit form home: ",totalDeposit);
    console.log("total withdraw form home: ",totalWithdraw);
    console.log("total transaction form home: ",totalTransaction);

    const navigate = useNavigate();
    if (!currentUser) {
        navigate("/")
        return null
    }
    const { name, email } = currentUser;

    console.log(currentUser);
    return (
        <div>
            <h1 className='text-black text-3xl font-bold'>Welcome back,<span className='text-blue-800'>{name}!</span></h1>
            <p className='text-blue-700'>{email}</p>
            <HomeTotalBalance currentUser={currentUser}/>
            <HomeDepoWithTotalTransaction totalDeposit ={totalDeposit} totalWithdraw ={totalWithdraw} totalTransaction={totalTransaction}/>
            <HomeRecentTransactions currentUser={currentUser} transactions={transactions} />
        </div>
    );
};

export default Home;