import React, {useState} from 'react';
import CountButton from "./CountButton";

const Count = () => {
    const [count,setCount] = useState(0)

    const fn = (amount) => {
        console.log("fn....")
        setCount(count + amount)
    }
    return (
        <div>
            <h1>{count}</h1>
            <CountButton fn={fn}></CountButton>
        </div>
    );
};

export default Count;