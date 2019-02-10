function initMap() {

        const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: positionOfZielonaGora,
        disableDefaultUI : true

});
/**
 * mouse position in infoWindow
 *
 * */
    google.maps.event.addListener(map,'mousemove',function(event) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        const show = "lat: "+lat+"\nlng: "+lng;
        document.getElementById('infoWindow').innerHTML = ""+show;

    });
    google.maps.event.addListener(map,'mouseout',function (event) {
        document.getElementById('infoWindow').innerText = '';

    });
    /**
     * sample plot item
     * */

    const objWithLL = [
        {lat: 52.15000,lng:15.699857},
        {lat:53.0036,lng:16.52155},
        {lat:53.0547,lng:17.20568},
        {lat:53.0003,lng:16.96548}
    ];

   var url = "http://localhost:8080/json.json";
    var j = [];
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) { j = data;
            },
        async: false
    });


   /*for(const i =1; i<20;i+1) {
    const     ob = [{lat: j.lat[i], lng: j.lng[i]}
            ];
    }*/


    const initRoad = createFlyRoad(objWithLL,map);


    /**
     * Create elements on the Google map**/

    const bottomButtons = document.createElement('div');
    bottomButtons.className = 'row';

    const leftButtons = document.createElement('div');
    leftButtons.className = 'col-0';

    const rightFrame = document.createElement('div');
    rightFrame.className = 'col-0';
/**
 * Left Google map buttons
*/

    const initFullscreenOn = new createLeftButtonDiv(leftButtons,map,'FULLSCREEN_ON');
    const initZoomUp = new createLeftButtonDiv(leftButtons,map,"ZOOM_UP");
    const initZoomDown = new createLeftButtonDiv(leftButtons,map,'ZOOM_DOWN');

    const initOpenStreetMap = new createLeftButtonDiv(leftButtons,map,'OSM');

  //  var initFulscreenOff = new createLeftButtonDiv(leftButtons,map,'FULLSCREEN_OFF');

    const testElement = document.createElement('div');
    const test = new testBottomButtonDiv(testElement,'testDis');

/**
 *  Right google map objects
*/

   /* const rightInfoWindow = document.createElement('div');
    rightInfoWindow.id = 'infoWindow';
    rightInfoWindow.style.width = '120px';
    rightInfoWindow.style.height = '120px';
    rightInfoWindow.style.marginRight = '22px';
    rightInfoWindow.style.marginTop = '22px';
    rightInfoWindow.style.background ='#1E90FF';
    rightInfoWindow.innerText = 'Show here';*/

    const initRightFrame = new createRightFrame(rightFrame,map);



    /**
     * Bottom Google map buttons
    */
    const initButtonLoad = new createBottomButtonDiv(bottomButtons,map,'DOWNLOAD_IGC');


    const initButtonSave = new createBottomButtonDiv(bottomButtons,map,'LOAD_IGC');

    const initButtonAddTuring = new createBottomButtonDiv(bottomButtons,map,'ADD_POINT');

    const initButtonRemTur = new createBottomButtonDiv(bottomButtons,map,'REMOVE_POINT');



    /**
     * Push elements to the Google map
    */
    bottomButtons.index = 1;
    leftButtons.index = 2;
    rightFrame.index = 3;


    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(bottomButtons);
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(rightFrame);


    map.controls[google.maps.ControlPosition.LEFT_TOP].push(leftButtons);
    //map.controls[google.maps.ControlPosition.CENTER].push(testElement);



    const marker = new google.maps.Marker({
        position: positionOfZielonaGora,
        //position : examplePos,
        map: map
    });
}
function createFlyRoad(JSONsource,map) {
    var bermudaTriangle = new google.maps.Polyline({
        path: JSONsource,

        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2


    });

    bermudaTriangle.setMap(map);
}
