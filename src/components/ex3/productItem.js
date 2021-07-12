

const ItemService = () => {

    const items = [
        {name:"연필",price:500},
        {name:"샤프",price:2000},
        {name:"노트",price:1000},
        {name:"지우개",price:500},
        {name:"샤프심",price:800},
        {name:"쫀드기",price:500}
    ]

    //클로저
    // 여기에 기능을 추가할예정
    const getItems = () => {
        return items
    }
    return {getItems:getItems}
    //getItems:getItems (외부에서 데이터를 가져가는부분):(안쪽 중요한데이터)
}
export default ItemService()
//getItems:(getItems = 이부분)뒷쪽부분 이 나감감 ItemSevice() 이렇게 하면