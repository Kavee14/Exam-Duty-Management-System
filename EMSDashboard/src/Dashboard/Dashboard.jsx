import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UpcomingDuties from './components/UpcomingDuties';
import Updates from './components/Updates';
import Calendar from './components/Calendar';
import RequestButton from './components/RequestButton';
import Footer from './components/Footer';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <div className="main-sections">
            <div className="left-section">
              <UpcomingDuties />
            </div>
            <div className="right-section">
              <Updates />
              <Calendar />
              <RequestButton />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>  <Footer /></div>
    </>
  );
};

export default Dashboard;
