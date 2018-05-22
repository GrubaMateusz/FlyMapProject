
var chicago = {lat: 41.85, lng: -87.65};
var deeafulWebStyle = new DeafulWebStyle();

function testBottomButtonDiv(controlDiv,name) {
    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.width = '80px';
    controlUI.style.height = '50px';
    controlUI.style.border = '2px solid #f22';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';

    controlUI.style.textAlign = 'center';

    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);



    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = deeafulWebStyle.fontt.color;
   // controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontFamily = deeafulWebStyle.fontt.fontName;
    //controlText.style.fontFamily = deeafulWebStyle.fontName;

controlText.style.paddingTop = '5px';
    controlText.style.fontSize = deeafulWebStyle.fontt.size;
    controlText.style.lineHeight = deeafulWebStyle.fontt.height;
    controlText.style.paddingLeft = deeafulWebStyle.fontt.padding;
    controlText.style.paddingRight = deeafulWebStyle.fontt.padding;
    controlText.innerHTML = name;
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function() {
        map.setCenter(chicago);
    });

}
function createBottomButtonDiv(controlDiv, map, name) {

    // noinspection JSAnnotator
    if(name == 'empty')
    {
        var controlUI = document.createElement('div');
        controlUI.style.width = deeafulWebStyle.spaceBetweenButton;
        controlUI.style.height = deeafulWebStyle.spaceBetweenButton;
        controlDiv.appendChild(controlUI);


    }
    else {
        var controlUI = document.createElement('div');
        controlUI.id = name;
        controlUI.style.backgroundColor = deeafulWebStyle.buttons.backgroundColor;
        controlUI.style.height = deeafulWebStyle.buttons.height;
        controlUI.style.border = deeafulWebStyle.buttons.border;                                //frame
        controlUI.style.borderRadius = deeafulWebStyle.buttons.borderRadius;                    //radiusButton
        controlUI.style.boxShadow = deeafulWebStyle.buttons.shadow;                             //Shadow
        controlUI.style.cursor = deeafulWebStyle.buttons.setCursor;
        controlUI.style.marginBottom = deeafulWebStyle.margin;
        controlUI.style.textAlign = deeafulWebStyle.buttons.textPos;
        controlUI.title = 'Click to '+name;

        controlUI.onmouseover = function (ev) { document.getElementById(name).style.backgroundColor = deeafulWebStyle.buttons.setClickedButtonColor; };
        controlUI.onmouseout = function (ev) { document.getElementById(name).style.backgroundColor = deeafulWebStyle.buttons.backgroundColor; };


        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = deeafulWebStyle.fontt.color;
        controlText.style.fontFamily = deeafulWebStyle.fontt.fontName;
        controlText.style.fontSize = deeafulWebStyle.fontt.size;
        controlText.style.lineHeight = deeafulWebStyle.fontt.height;
        controlText.style.paddingLeft = deeafulWebStyle.fontt.padding;
        controlText.style.paddingRight = deeafulWebStyle.fontt.padding;
        controlText.innerHTML = name;
        controlUI.appendChild(controlText);
    }
}
function createDivButton(controlDiv,src,name,map) {
//create Div with frame
    var buttonDiv = document.createElement('div');

    buttonDiv.style.border = deeafulWebStyle.buttons.border;
    buttonDiv.style.borderRadius = deeafulWebStyle.buttons.borderRadius;
    buttonDiv.style.margin = deeafulWebStyle.margin;
    buttonDiv.style.cursor = deeafulWebStyle.buttons.setCursor;
    buttonDiv.style.backgroundColor = deeafulWebStyle.buttons.backgroundColor;
    buttonDiv.id = name;

    //create click color style
    buttonDiv.onmouseover = function (ev) { document.getElementById(name).style.backgroundColor = deeafulWebStyle.buttons.setClickedButtonColor; };
    buttonDiv.onmouseout = function (ev) { document.getElementById(name).style.backgroundColor = deeafulWebStyle.buttons.backgroundColor; };


    buttonDiv.title = "Click to "+name.toLowerCase();

    //create image to Div button
    var img = document.createElement('img');
    img.id = 'img'+name.toLowerCase();
    img.src = src;
    img.style.width = '30px';
    img.style.height = '30px';
    img.style.margin = '5px';

    //create mouse event lisner to FullScreen button
    addFullscreenEventLisner(buttonDiv,name);
    addZoomEventLisner(buttonDiv,map,name);

    buttonDiv.appendChild(img);

    controlDiv.appendChild(buttonDiv);

}
// add image to buttons
function createLeftButtonDiv(controlDiv,map,buttonType) {



    switch (buttonType){
        case "ZOOM_UP":
        {

            const src =deeafulWebStyle.imageButton.zoomUp;

            createDivButton(controlDiv,src,buttonType,map);


        }
        break;
        case "ZOOM_DOWN":
        {

            const src = deeafulWebStyle.imageButton.zoomDown;

            createDivButton(controlDiv,src,buttonType,map);
        }
        break;
        case 'FULLSCREEN_ON':
        {
           // var click = 1;
            const src = deeafulWebStyle.imageButton.fullScreenOn;
            createDivButton(controlDiv,src,buttonType,map);

        }
        break;
        case 'FULLSCREEN_OFF':
        {
            const src = deeafulWebStyle.imageButton.fullScreenOff;

            createDivButton(controlDiv,src,buttonType,map);
        }
        break;
        /*case 'sateliteMap':
        {}
        break;
        case 'normalMap':
        {}
        break;*/
        default:
        {
            console.log('WrongClass!!!');
        }

    }




}
function addFullscreenEventLisner(buttonDiv,name) {
    if (name == 'FULLSCREEN_ON') {
        var click = 1;
        buttonDiv.addEventListener('click', function () {

            toggleFullScreenMode();

            if (click == 1) {
                document.getElementById('img' + name.toLowerCase()).setAttribute('src', deeafulWebStyle.imageButton.fullScreenOff);
                click++;

            }
            else {
                document.getElementById('img' + name.toLowerCase()).setAttribute('src', deeafulWebStyle.imageButton.fullScreenOn);
                click++;
            }
            click = click % 2;

        });

    }

}
function addZoomEventLisner(buttonDiv,map,name) {



    if(name == 'ZOOM_UP')
    {
        buttonDiv.addEventListener('click',function () {
            var zoomLevel = map.getZoom();
            zoomLevel +=1;
            map.setZoom(zoomLevel);

        });

    }
    else if (name == 'ZOOM_DOWN')
    {
        buttonDiv.addEventListener('click',function () {
            var zoomLevel = map.getZoom();
            zoomLevel -=1;
            map.setZoom(zoomLevel);

        });

    }
    else
        "";



}

