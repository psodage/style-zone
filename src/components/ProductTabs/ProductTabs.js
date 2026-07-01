import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductTabs.css';

const TABS = [
  { key: 'description', label: 'Description' },
  { key: 'specifications', label: 'Specifications' },
];

const tabVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const ProductTabs = ({ description, specifications }) => {
  const [activeTab, setActiveTab] = useState('description');

  const specs = specifications || {};

  const specRows = [
    { label: 'Material', value: specs.material },
    { label: 'Weight', value: specs.weight },
    { label: 'Warranty', value: specs.warranty },
    { label: 'Care Instructions', value: specs.careInstructions },
  ].filter((row) => row.value);

  return (
    <section className="product-tabs section-padding">
      <div className="container">
        {/* Tab Bar */}
        <div className="product-tabs__bar">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`product-tabs__tab${activeTab === tab.key ? ' product-tabs__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="product-tabs__content">
          <AnimatePresence mode="wait">
            {activeTab === 'description' && (
              <motion.div
                key="description"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.25 }}
              >
                <p className="product-tabs__description">
                  {description || 'No description available.'}
                </p>
              </motion.div>
            )}

            {activeTab === 'specifications' && (
              <motion.div
                key="specifications"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.25 }}
              >
                {specRows.length > 0 ? (
                  <table className="product-tabs__specs-table">
                    <tbody>
                      {specRows.map((row, i) => (
                        <tr key={i}>
                          <td className="product-tabs__specs-label">{row.label}</td>
                          <td className="product-tabs__specs-value">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="product-tabs__description">
                    No specifications available.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
