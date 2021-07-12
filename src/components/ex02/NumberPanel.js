import React, {useState} from 'react';
import DisplayPanel from "./DisplayPanel";
import ControllerPanel from "./ControllerPanel";
import OddEven from "../ex1/OddEven";
import makeNum from "../ex1/numService";

const NumberPanel = () => {

    // 부모의 상태를 만든다
    const [num, SetNum] = useState(makeNum)
    const [arr, SetArr] = useState([])
    // 넘이라는 변수 초기화
    //<DisplayPanel num = {num}></DisplayPanel> 넘이라는 이름으로 변수값 전달

    const change = () => {
        console.log("change.....")
        SetNum(makeNum())


    }
    // 자바스크립트의 함수는 객체이므로 {num}  {change} 이런식으로 객체로 담는다
    return (
        <div>
            <h1>Number Panel</h1>
            <DisplayPanel num={num}></DisplayPanel>
            <OddEven num={num}></OddEven>
            <ControllerPanel change={change}></ControllerPanel>
        </div>
    );
};

export default NumberPanel;