import React, { useState } from 'react';
import "./payment_history.css";

const PaymentHistory = () => {
  const [bills, setBills] = useState([
    ['13.4.2005', 618, '34132'],
    ['20.6.2010', 750, '87654'],
    ['05.12.2023', 1200, '98765']
  ]);

  return (
    <div className='payment_history'>
      <h2>Payment History</h2>
      <div className="history">
        {bills.map((bill, index) => (
          <div key={index} className="bill-item">
            <p><strong>Date:</strong> {bill[0]}</p>
            <p><strong>Amount:</strong> ${bill[1]}</p>
            <p><strong>Transaction ID:</strong> {bill[2]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentHistory;
