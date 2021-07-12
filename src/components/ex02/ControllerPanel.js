import React from 'react';
import numService from "../ex1/numService";


//onClick 으로 이벤트 주기  부모컴포넌트와 통신할수있는 수단이 필요
// 부모컴포넌트 상태 state 를 바꾸기위해 props 가아니라 아래에서 위로 올라가야함 부모쪽으로
// 부모에게 {change} 받음
// onClick={change()} = 바로실행됨 그래서 변경
// () => change() 클릭이 됬을때 실행해라..()  = 이벤트 들어갈예정
const ControllerPanel = ({change}) => {
    return (
        <div>
            <h2>Controller Panel</h2>
            <div>
                <button onClick={() => change()}>CLICK</button>

            </div>
        </div>
    );
};

export default ControllerPanel;