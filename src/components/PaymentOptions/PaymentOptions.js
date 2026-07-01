import React from 'react';
import './PaymentOptions.css';

const paymentMethods = [
  'UPI',
  'Credit Card',
  'Debit Card',
  'Net Banking',
  'EMI',
  'Wallet',
];

const PaymentOptions = () => {
  return (
    <div className="payment-options">
      <span className="payment-options__label">Payment Options</span>
      <div className="payment-options__list">
        {paymentMethods.map((method) => (
          <span key={method} className="payment-options__badge">
            {method}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PaymentOptions;
