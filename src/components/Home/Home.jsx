import React from 'react';
import HomeTotalBalance from '../pages/HomeTotalBalance';
import HomeDepoWithTotalTransaction from '../pages/HomeDepoWithTotalTransaction';
import HomeRecentTransactions from '../pages/HomeRecentTransactions';

const Home = ({currentUser}) => {
    const {name,email} = currentUser;
    // console.log(currentUser);
    return (
        <div>
            <h1>Welcome back,{name}!</h1>
            <p>{email}</p>
            <HomeTotalBalance currentUser={currentUser} />
            <HomeDepoWithTotalTransaction currentUser={currentUser}/>
            <HomeRecentTransactions />
        </div>
    );
};

export default Home;