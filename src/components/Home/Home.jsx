import React from 'react';
import HomeTotalBalance from '../pages/HomeTotalBalance';
import HomeDepoWithTotalTransaction from '../pages/HomeDepoWithTotalTransaction';
import HomeRecentTransactions from '../pages/HomeRecentTransactions';

const Home = () => {
    return (
        <div>
            <h1>Welcome back,Munna Khan!</h1>
            <p>munnakhan01329@gmail.com</p>
            <HomeTotalBalance />
            <HomeDepoWithTotalTransaction />
            <HomeRecentTransactions />
        </div>
    );
};

export default Home;