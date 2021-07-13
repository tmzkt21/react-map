import React, {useState} from 'react';

const Count1 = () => {

    const [num, setNum] = useState(0)

    const changeNum = (value) => {
        setNum(num + value)
        // 연산하면 새로운 객체
    }

    return (
        <div>
            <h1>Count1</h1>
            <CountDisplay num={num}></CountDisplay>
            <CountButtons changeNum={changeNum} num={num}></CountButtons>
        </div>
    );
};
const CountDisplay = ({num}) => {
    return (
        <div>
            <h2>{num}</h2>
        </div>
    )
}

const CountButtons = ({changeNum}) => {
    return (
        <div>
            <button onClick={() => {
                changeNum(+ 1)
            }}>++
            </button>
            <button onClick={() => {
                changeNum(- 1)
            }}>--
            </button>
        </div>
    )
}
export default Count1;