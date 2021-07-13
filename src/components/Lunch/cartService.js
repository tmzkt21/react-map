import React from 'react';

const cartService = () => {

    let arr = []

    const append = (store) => {
        arr.push(store)
    }
    const getAll = () => {
        return arr
    }
    const remove = (store) => {
        arr = arr.filter( s => s.name !== store.name)
    }

    return {append,getAll,remove}
};


export default cartService()