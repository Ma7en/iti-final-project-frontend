import React, { useState, useEffect } from "react";
import "./WriteDetails.css";
import Footer from "../../ui/footer/Footer";

const WriteDetails = () => {
    const [meters, setMeters] = useState("");
    const pricePerMeter = 150;
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const metersNum = parseFloat(meters);

        if (!isNaN(metersNum)) {
            setTotalPrice(metersNum * pricePerMeter);
        } else {
            setTotalPrice(0);
        }
    }, [meters, pricePerMeter]);

    const resetInputs = () => {
        setMeters("");
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
                                <label className="calculator-label">
                                    Meters:
                                </label>
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
                                <strong>Price per Meter:</strong>
                            </td>
                            <td>
                                <strong className="calculator-price">
                                    ${pricePerMeter}
                                </strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Total Price:</strong>
                            </td>
                            <td>
                                <strong className="calculator-total">
                                    ${totalPrice.toFixed(2)}
                                </strong>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button className="btn" onClick={resetInputs}>
                                    Reset
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default WriteDetails;
