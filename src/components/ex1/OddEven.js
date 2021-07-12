import React from 'react';
import makeNum from "./numService";
// 기능 적인 것은 외부에서 알거없고 이거 가져다 써 기능가져다 써! export default makeNum()


// import {makeNum} from "./numService";
// 즉 export 만하면 {} 묶어서 가져옴 가져다 쓰기만 하는게 아닌경우? export만

// 숫자를 받아서 홀수인지 짝수인지 리턴 div 안에는 구문을 쓸수없다

// 리액트는  화살표함수를 거의다씀
// 이런 콘스트가 많아지면 모듈화 쪼개줘야한다..
const getContent = (num) => {
    if (num % 2 === 0) {
        return <h1>짝수야</h1>
    }else {
        return <h1>홀수야</h1>
    }
}


// 위로 올리면 밑에 컴포넌트만 호출 위에 내용을 계속 호출할필요가 없다
const OddEven = ({num}) => {

    makeNum();

    return (
        <div>
            {getContent(num)}
        </div>
    );
};

export default OddEven;