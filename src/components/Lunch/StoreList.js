import React, {useState} from 'react';
import storeService from "./storeService";
import cartService from "./cartService";

const StoreList = () => {

    const [stores, setStores] = useState(storeService.getStores)
    // const cartService = cartService
    // const store =  storeService.getStores()
    // 이 가게들을 상태로 만들어야한다 바뀔거니까


    const list = stores.map((store, idx) => <li key={idx} onClick={() => cartService.append(store)}>{store.name}</li>)
    // stores li 태그에 map 을 사용하여 목록 뿌려주는과정
    //onClick={cartService.append(store) 클릭하면 카트서비스에 클릭한 store 정보를 넘겨줌

    //예) 한식이라는 값을 (str) 로받음
    const searchByCat = (str) => {
        const filteredStores = storeService.getByCat(str)
        // 한식이 들어가면 getByCat 에서 한식이랑 stores 안에 카테고리랑 한식이랑 맞는게 있는지 비교해서 값을 리턴해줍니다
        setStores(filteredStores)
        // 식을 setStores 로 저장
    }

    return (
        <div>
            <h2>StoreList</h2>
            <div>
                <b onClick={() => {
                    searchByCat()
                }}>ALL</b>

                <b onClick={() => {
                    searchByCat('한식')
                }}>한식</b>

                <b onClick={() => {
                    searchByCat('일식')
                }}>일식</b>

            </div>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    );
};

export default StoreList;