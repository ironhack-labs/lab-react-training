import React from 'react';

const Rating = ({children}) => {
    return (
        <div className="Rating">
            {"★".repeat(Math.round(Number(children)))}{"☆".repeat(5 - Math.round(Number(children)))}
        </div>
    );
};

export default Rating;