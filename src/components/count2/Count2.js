import React, {useState} from 'react';
import numService from "./numService";

const Count2 = () => {
    //상태
    const [changed, setChanged] = useState(false)
    //함수
    const callChanged = () => {
        setChanged(!changed)
        console.log(!changed +" 무엇을 반환하느냐~")
        // !changed 단일 피연산자를 true로 변환할 수 있으면 false를 반환합니다. 그렇지 않으면 true를 반환합니다.
        // !changed true 값 나옴 처음 상태가 false 이기에 true 로 바꾸고 true면 다시 false
    }
    // 리셋버튼 안됨 확인필요
    numService.setFn(callChanged)
    // callChanged =  setChanged(!changed) 식이 넘어가고 callChanged() 식이 실행된 값이 넘어간다
    return (
        <div>
            <h1>Counter2</h1>
            <Count2Display></Count2Display>
            <Count2Buttons callChanged={callChanged}></Count2Buttons>
        </div>
    );
};

const Count2Display = () => {

    return (
        <div>
            <h2>{numService.getCount()}</h2>
        </div>
    )
}

const Count2Buttons = ({callChanged}) => {

    return(
        <div>
            <button onClick={() => {numService.changeValue(1) } }>++</button>
            <button onClick={() => {numService.resetCount() } }>reset</button>
            <button onClick={() => {numService.changeValue(-1)  } }>--</button>
            <button onClick={() => callChanged()}>test</button>
        </div>
    )
}

export default Count2;