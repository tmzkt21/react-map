import React, {useState} from 'react';
import HellButton from "./HellButton";

const HelloWord = () => {

    const [content,setContent] = useState("Hello Word");
    //함수 함수는 상태를 유지하지않음 실행하고나면 끝남
    // app.js 입장에서는 함수를 반환해주고 끝났음 그래서 changeContent 변수만들고 값을 넣어줘도 바뀌는게아님 함수가 이미끝났기 떄문에
    // 그래서 끝난 함수가 끝난후 스테이트 관리 즉 훅을 통해서 건드릴수있다
    // setContent 사용해서 함수가 다시실행됨

    const changeContent = () => {
        alert("Content")
        setContent("HELL!!")
        console.log("after:"+ content)
    }
    // 변수를 쓸때는 {} 객체체 <h1>{content}</h1>
    return (
        <div>
            <h1>{content}</h1>
            <HellButton action = {changeContent}></HellButton>
        </div>
    );
};

export default HelloWord;