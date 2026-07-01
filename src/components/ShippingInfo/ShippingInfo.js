import React from 'react';
import './ShippingInfo.css';

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 3h15v13H1z" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const RefreshCcwIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" />
    <polyline points="23 20 23 14 17 14" />
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
  </svg>
);

const BanknotesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="3" />
    <path d="M2 10h2" />
    <path d="M20 10h2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const shippingItems = [
  {
    icon: <TruckIcon />,
    title: 'Free Shipping',
    subtitle: 'On orders above ₹499',
  },
  {
    icon: <RefreshCcwIcon />,
    title: '7 Days Return',
    subtitle: 'Easy return policy',
  },
  {
    icon: <BanknotesIcon />,
    title: 'Cash on Delivery',
    subtitle: 'Pay when you receive',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Secure Payments',
    subtitle: '100% secure checkout',
  },
];

const ShippingInfo = () => {
  return (
    <div className="shipping-info">
      <div className="shipping-info__grid">
        {shippingItems.map((item, index) => (
          <div key={index} className="shipping-info__item">
            <span className="shipping-info__icon">{item.icon}</span>
            <div className="shipping-info__text">
              <span className="shipping-info__title">{item.title}</span>
              <span className="shipping-info__subtitle">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingInfo;
