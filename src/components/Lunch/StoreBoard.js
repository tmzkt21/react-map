import React from 'react';
import StoreList from "./StoreList";
import StoreCart from "./StoreCart";

const StoreBoard = () => {
    return (
        <div>
            <h1>StoreBoard</h1>
            <StoreList></StoreList>
            <StoreCart></StoreCart>
        </div>
    );
};

export default StoreBoard;