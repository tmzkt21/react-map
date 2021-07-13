import React, {useEffect} from 'react';
import storeService from "./storeService";

const style  = {
    width:'100%',
    height:'30vh',
    // backgroundColor:'gray'
}

const kakao = window.kakao

const StoreMap = () => {

    useEffect(()=> {
        console.log("StoreMap useEffect....")

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(37.57040150611514, 126.98529248099322), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);
        showMarkers(map)
    }, [])

    const showMarkers = (map) => {
        console.log(123123,kakao.maps)
        const stores = storeService.getStores()
        const positions = stores.map(store => ({title: store.name, latlng: new kakao.maps.LatLng(store.lat, store.lng)}))

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < positions.length; i++) {

            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            // var 는 쓰지말자 진짜;;
            const marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage // 마커 이미지
            });
            //자바스크립트의 객체는 속성을 줄수있다

            marker.origin = stores[i]
            // 스토어를 마커오리진에 담고 출력하면 오..
            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function () {
                // 마커 위에 인포윈도우를 표시합니다
                console.log(marker)
                console.log(marker.origin)
                alert(marker.origin)
            });
    }

    }

    return (
        <div>
            <div id='map' style={style}>
            </div>
        </div>
    );
};

export default StoreMap;