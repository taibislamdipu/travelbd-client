import React from 'react';

const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center my-3 py-5">
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;