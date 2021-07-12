import React, {useState} from 'react';
import ItemList from "./ItemList";
import ItemCart from "./ItemCart";

const style = {
    display:"flex",
    flexDirection:"row"
}



const Daiso = () => {

    const [userItems , SetUseritems] = useState([]);
    const [sum ,SetSum] = useState(String)


    const addItemToCart = (item) => {

        SetUseritems([...userItems,item])
        // ...userItems기존에 배열을 펴주고 ,item  새로운 배열을 넣음  (똑같은 애를 참조하면 안됨)
    }

    const addSum = () => {

    }

    return (
        <div>
            <h1>welcome to Daiso</h1>
            <div style={style}>
                <ItemList addItemToCart={addItemToCart}></ItemList>
                <ItemCart userItems={userItems}></ItemCart>
            </div>
        </div>
    );
};

export default Daiso;