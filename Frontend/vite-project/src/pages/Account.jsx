import React, { useEffect, useState } from 'react';
import "./Home.css";

const Home = () => {
  const [c_data, setData] = useState([]);

  async function Getcus_details() {
    try {
      const value = await fetch("http://localhost:3000/electricity/customer-details");
      const data = await value.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching customer details:", error);
    }
  }
  useEffect(() => {
    async function fetchData() {
      await Getcus_details();
    }
    fetchData();
  }, []);
  return (
    <div className='home'>
      <div className='Heading'>
        <p>My Account</p>
      </div>
      <div className="user_content">
        {c_data.length > 0 ? (
          c_data.map((customer, index) => (
            <div key={index} className= "customer_card">
              <p><strong>Name:</strong> {customer.name}</p>
              <p><strong>Email:</strong> {customer.email}</p>
              <p><strong>Address:</strong> {customer.address}</p>
              <p><strong>Phone:</strong> {customer.phone}</p>
            </div>
          ))
        ) : (
          <p>Loading customer details...</p>
        )}
      </div>
      <div className="footer">
        <p>All Bill Paid</p>
      </div>
    </div>
  );
};
export default Home;
