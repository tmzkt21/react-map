import React from 'react';

const cartService = () => {

    let arr = []
    let fn;

    const setFn = (func) => {
        fn = func
        console.log("fn====================================")
    }
    const append = (store) => {
        arr.push(store)
        fn()
    }
    const getAll = () => {
        return arr
    }
    const remove = (store) => {
        arr = arr.filter(s => s.name !== store.name)
        fn()
        // fn 뭐임??? ㅁㅊ네
    }

    return {append, getAll, remove, setFn}
};


export default cartService()