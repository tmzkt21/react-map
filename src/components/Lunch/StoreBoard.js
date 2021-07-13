import React from 'react';
import StoreList from "./StoreList";
import StoreCart from "./StoreCart";
import StoreMap from "./StoreMap";

// 함수를 실행할땐 안쓰고싶음 변수로 만들어서 필요할떄만
const StoreBoard = () => {
    return (
        <div>
            <h1>StoreBoard</h1>
            <StoreMap></StoreMap>
            <StoreList></StoreList>
            <hr/>
            <StoreCart></StoreCart>
        </div>
    );
};

export default StoreBoard;