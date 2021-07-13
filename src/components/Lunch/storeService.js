const storeService = () => {

    const stores = [
        {name: '수정식당', let: 37.56974315105852, lng: 126.98875360544048, cat: '한식'},
        {name: '청진동해장국', let: 37.56565064314979, lng: 127.00085484661231, cat: '일식'},
        {name: '용강식당', let: 37.565072768645216, lng: 126.99549541142397, cat: '일식'},
        {name: '문화옥', let: 37.568386863717166, lng: 126.9984137172927, cat: '한식'}
    ]
    // 읽기 전용
    const getStores = () => {
        return stores
    }
    // 카테고리 필터
    const getByCat = (str) => {
        if (!str) {
            return stores

        }
        return stores.filter(store => store.cat === str)
        // 스토어에 카테고리랑 넘어온 문자값 필터
    }

    return {getStores,getByCat}
}
export default storeService()
// storeService() = return {getStores:getStores}

// 서비스 여기에 ajax 코드가 들어감