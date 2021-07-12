
// 이 기능을 외부에서 써주고싶다
// export export 디폴트 둘중하나 써야한다
// 기능적인 컴포넌트는 소문자로 만든다  로직(서비스)을 뺴준상태
const makeNum = () => {

  const value = Math.random()* 100
    // parseInt(Math.random()* 100)

  return Math.ceil(value)

}

export default makeNum;