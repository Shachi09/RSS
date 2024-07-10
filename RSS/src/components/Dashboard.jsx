import React from 'react';
import '../styles/dashboard.css';
import rssImg from '../assets/RSS 1.png';


function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <img src={rssImg} alt="RSS Logo" />
          {/* <h1>RSS</h1> */}
          <h2 style={{fontSize:"12px "}}>राष्ट्रीय स्वयंसेवक संघ</h2>
        </div>
        <div className="filters">
          <div className="filter">
            <label>वर्ष</label>
            <input type="text" placeholder="से" />
            <input type="text" placeholder="तक" />
          </div>
          <div className="filter">
            <label>दायित्व</label>
            <input type="text" placeholder="सरसंघचालक" />
          </div>
          <div className="filter">
            <label>नाम</label>
            <input type="text" placeholder="मा.मोहन जी भागवत" />
          </div>
          <div className="buttons">
            <button>Search</button>
            <button>Clear</button>
          </div>
        </div>
      </div>
      <div className="content">
        <h2>Results</h2>
        {/* <table>
          <thead>
            <tr>
              <th>कालावधि</th>
              <th>दायित्व</th>
              <th>नाम</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>वर्ष</th>
              <td>से</td>
              <td>तक</td>
            </tr>
            <tr>
              <td>मार्च - 2014</td>
              <td>जून - 2016</td>
              <td></td>
            </tr>
          </tbody>
        </table> */}

<table>
          <thead>
            <tr>
              <th>कालावधि</th>
              <th>दायित्व</th>
              <th>नाम</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>वर्ष</th>
              <td>से</td>
              <td>तक</td>
            </tr>
            <tr>
              <td>मार्च - 2014</td>
              <td>जून - 2016</td>
              <td></td>
            </tr>
          </tbody>
        </table>


      </div>
    </div>
  );
}

export default Dashboard;
