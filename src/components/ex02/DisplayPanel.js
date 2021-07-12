import React from 'react';
// 스타일 먹이는 법 객체를 만들자

// 객체
const style = {
    // backgroundColor : "blue",
    height: "10vh"
    // vh 뷰포트기준
    // 디버깅용도로만 쓰자
}
// 넘서비스를 디스플레이페널에서 이용하던가
//{num} 변수값받기
const DisplayPanel = ({num}) => {
    return (
        <div style={style}>
            <h2>Display Panel {num}</h2>
        </div>
    );
};

export default DisplayPanel;