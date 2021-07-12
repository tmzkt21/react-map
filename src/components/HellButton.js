import React from 'react';

const HellButton = ({action}) => {

    console.log(action);

    return (
        <div>
            <button onClick={action}>헬버튼</button>

        </div>
    );
};

export default HellButton;