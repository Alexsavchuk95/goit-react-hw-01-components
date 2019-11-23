import React from 'react';
import FriendList from './components/friend-list/friend-list';
import friends from './components/friend-list/friends.json';
import SocialProfile from './components/social-profile/social-profile';
import user from './components/social-profile/user';
import StatisticsSection from './components/statistics-section/statistics-section';
import stats from './components/statistics-section/stats';
import TransactionHistory from './components/transaction-history/transaction';
import transactions from './components/transaction-history/transactions.json';

const App = () => (
  <>
    <FriendList friends={friends} />
    <SocialProfile user={user} />
    <StatisticsSection stats={stats} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
