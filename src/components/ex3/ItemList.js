import React, {useState} from 'react';
import service from './productItem';



const ItemList = ({addItemToCart}) => {

    const ItemDetail = ({item}) => {

        return (
            <div>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
                <div><button onClick={() => {addCart(item)}}>CLICK</button></div>
            </div>
        )
    }


    // console.log(item.getItem)
    const list = service.getItems().map((item, idx) =>
        <ItemDetail key={idx} item={item}></ItemDetail>)

    // 클로저
    const addCart = (item) => {
        console.log("add Cart...", item)
        addItemToCart(item)
    }


    // const list = service.getItems().map((item, idx) =>
    //         <ItemDetail key={idx} item={item}></ItemDetail>)

    // li태그를  jsx 로 바꾼과정
    //목록 데이터를 jsx 덩어리로 만들어줘야함 map 함수

    return (
        <div style={{width: "70vw"}}>
            <h2>ItemList</h2>
            <ul>{list}</ul>
        </div>
    );
};



export default ItemList;