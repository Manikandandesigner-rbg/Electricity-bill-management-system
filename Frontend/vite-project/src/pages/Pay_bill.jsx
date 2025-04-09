import React from 'react'
import "./Pay_bill.css"
const About = () => {
  return (
    <div className='home bill'>
      <div className="heading_pay">
        <p>Pay Bill</p>
      </div>
      <div className="billdetails">
        <div className='content_b'>
          <table>
            <thead>
              <th>BillNo</th>
              <th>Name</th>
              <th>Bill Date</th>
              <th>KWatt</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>hari</td>
                <td>567</td>
                <td>678</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="paythings">

        </div>
      </div>
    </div>
  )
}
export default About;
