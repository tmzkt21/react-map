import React, {useEffect, useState} from 'react';
import cartService from "./cartService";

const StoreCart = () => {
    const [flag, setFlag] = useState(false)

    const changeFlag = () => {
        setFlag(!flag)
    }

    cartService.setFn(changeFlag)
    //누를때마다 계속 호출됨

    // useEffect(() => {
    //     cartService.setFn(changeFlag)
    //     // changeFlag () 이거 쓰지마 .. 무한루프걸림
    //     // setFn 이작업을 한번만 하고싶음 useEffect 사용
    //         아직 미완성
    // },[])

    const storeItem = cartService.getAll()
    const list = storeItem.map((store, idx) => <li key={idx}>{store.name}
        <button onClick={() => cartService.remove(store)}>DEL</button>
    </li>)
    return (
        <div>
            <h2>StoreCart</h2>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default StoreCart;