import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb__list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="breadcrumb__item">
                {index > 0 && (
                  <span className="breadcrumb__separator" aria-hidden="true">›</span>
                )}
                {isLast ? (
                  <span className="breadcrumb__current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.path} className="breadcrumb__link">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
