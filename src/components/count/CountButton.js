import React from 'react';
import {Button} from "@material-ui/core";

const CountButton = ({fn}) => {
    return (
        <div>
            <Button onClick={()=>fn(+1)}>++</Button>
            <Button onClick={()=>fn(-1)}>--</Button>
        </div>
    );
};

export default CountButton;