// 함수는 상태를 저장할수없어서 클로저를씀
// 클로저 쓰는 패턴
const numService = () => {

    let count = 0;
    let fn;
    // fn = setChanged(!changed)

    const setFn = (fn1) =>{
        fn = fn1
        //fn1 = setChanged(!changed)
    }

    const changeValue = (amount) => {
        count += amount
        fn()
        return count
    }

    const getCount = () => {
        return count
    }

    const resetCount = () => {
        count = 0
        return count
    }

    return {changeValue, resetCount, getCount,setFn}
    // return {changeValue:changeValue,resetCount:resetCount} 줄인것이 위에
    // 상태를 서비스 객체가 이용할수있도록 바꿈..
}
export default numService()
// () 실행된 결과를 반환 return changeValue 반환
//