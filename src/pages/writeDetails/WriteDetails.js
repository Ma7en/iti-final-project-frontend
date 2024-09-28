import React, { useState, useEffect } from 'react';
import './WriteDetails.css';
import Footer from '../../ui/footer/Footer';

const WriteDetails = () => {
  const [meters, setMeters] = useState('');
  const [pricePerMeter, setPricePerMeter] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const metersNum = parseFloat(meters);
    const priceNum = parseFloat(pricePerMeter);
    
    if (!isNaN(metersNum) && !isNaN(priceNum)) {
      setTotalPrice(metersNum * priceNum);
    } else {
      setTotalPrice(0);
    }
  }, [meters, pricePerMeter]);

  const resetInputs = () => {
    setMeters('');
    setPricePerMeter('');
    setTotalPrice(0);
  };

  return (
 
    <>
       <div className="calculator-container">
      <h2 className="calculator-title">Price Calculator</h2>
      <table className="calculator-table">
        <tbody>
          <tr>
            <td>
              <label className="calculator-label">Meters:</label>
            </td>
            <td>
              <input
                type="number"
                value={meters}
                onChange={(e) => setMeters(e.target.value)}
                placeholder="Enter meters"
                className="calculator-input"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label className="calculator-label">Price per Meter:</label>
            </td>
            <td>
              <input
                type="number"
                value={pricePerMeter}
                onChange={(e) => setPricePerMeter(e.target.value)}
                placeholder="Enter price"
                className="calculator-input"
              />
            </td>
          </tr>
          <tr>
            <td>
              <strong className="btn">Total Price:</strong>
            </td>
            <td>
              <strong className="calculator-total">${totalPrice.toFixed(2)}</strong>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button className="btn" onClick={resetInputs}>Reset</button>
            </td>
          </tr>
        </tbody>
      </table>
     
    </div>
    
    </>
  );
};

export default WriteDetails;
