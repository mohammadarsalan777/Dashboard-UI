import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner-container">
            <svg className="spinner" viewBox="0 0 100 100">
                <circle
                    className="spinner-circle"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#ccc"
                    strokeWidth="7"
                />
                <circle
                    className="spinner-circle spinner-circle-violet"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="7"
                    strokeDasharray="283"
                    strokeDashoffset="85"
                />
            </svg>
            <div className="spinner-text ">70% Done
            </div>

        </div>
    );
};

export default Spinner;