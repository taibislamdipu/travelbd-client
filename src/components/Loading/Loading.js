import React from 'react';

const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center my-3">
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;