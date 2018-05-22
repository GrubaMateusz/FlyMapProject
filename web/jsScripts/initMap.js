
function initMap() {

    var positionOfZielonaGora = {lat: 51.939, lng: 15.506};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: positionOfZielonaGora,
        disableDefaultUI : true

    });


    /*Create an inicjalize buttons on the map*/

    const bottomButtons = document.createElement('div');
    bottomButtons.className = 'row';

    const leftButtons = document.createElement('div');
    leftButtons.className = 'col-0';

    var initFullscreenOn = new createLeftButtonDiv(leftButtons,map,'FULLSCREEN_ON');
    const initZoomUp = new createLeftButtonDiv(leftButtons,map,"ZOOM_UP");
    const initZoomDown = new createLeftButtonDiv(leftButtons,map,'ZOOM_DOWN');


  //  var initFulscreenOff = new createLeftButtonDiv(leftButtons,map,'FULLSCREEN_OFF');

    var testElement = document.createElement('div');
    var test = new testBottomButtonDiv(testElement,'testDis');

    var rightInfoWindow = document.createElement('div');
    rightInfoWindow.style.width = '120px';
    rightInfoWindow.style.height = '120px';
    rightInfoWindow.style.marginRight = '22px';
    rightInfoWindow.style.marginTop = '22px';
    rightInfoWindow.style.background ='#1E90FF';
    rightInfoWindow.innerText = 'Show here';
    
    const initButtonLoad = new createBottomButtonDiv(bottomButtons,map,'Load File');

    const empptySpace = new createBottomButtonDiv(bottomButtons,map,'empty');
    const initButtonSave = new createBottomButtonDiv(bottomButtons,map,'Save File');
    const emptySpaces = new createBottomButtonDiv(bottomButtons,map,'empty');
    const initButtonAddTuring = new createBottomButtonDiv(bottomButtons,map,'AddTur');
    const emptySpacess = new createBottomButtonDiv(bottomButtons,map,'empty');
    const initButtonRemTur = new createBottomButtonDiv(bottomButtons,map,'Rem Tur');



    bottomButtons.index = 1;
    leftButtons.index = 2;



    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(bottomButtons);
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(rightInfoWindow);

    map.controls[google.maps.ControlPosition.LEFT_TOP].push(leftButtons);
    //map.controls[google.maps.ControlPosition.CENTER].push(testElement);



    var marker = new google.maps.Marker({
        position: positionOfZielonaGora,
        map: map
    });
}