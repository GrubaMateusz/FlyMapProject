
var chicago = {lat: 41.85, lng: -87.65};
const deeafulWebStyle = new DeafulWebStyle();

/**
 * Test map Div

*/

function testBottomButtonDiv(controlDiv,name) {
    // Set CSS for the control border.
    const controlUI = document.createElement('div');
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
    const controlText = document.createElement('div');
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
    buttonDiv.onmouseover = function () { document.getElementById(name).style.backgroundColor = deeafulWebStyle.buttons.setClickedButtonColor; };
    buttonDiv.onmouseout = function () { document.getElementById(name).style.backgroundColor = deeafulWebStyle.buttons.backgroundColor; };


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
    addOSMEventLisner(buttonDiv,map,name);

    addDownloadEventListener(buttonDiv,name);
    addLoadIGCEventListener(buttonDiv,map,name);

    buttonDiv.appendChild(img);

    controlDiv.appendChild(buttonDiv);

}
/**
 * Create Bottom Buttons and add img to buttons
 * */
function createBottomButtonDiv(controlDiv, map, buttonType) {

    // function create space between buttons
   /* if(name == 'empty')
    {
        const controlUI = document.createElement('div');
        controlUI.style.width = deeafulWebStyle.spaceBetweenButton;
        controlUI.style.height = deeafulWebStyle.spaceBetweenButton;
        controlDiv.appendChild(controlUI);


    }
    else {*/
        /**
         * creating button style
         * */
        switch (buttonType){

            case 'DOWNLOAD_IGC':
            {
                const src = deeafulWebStyle.imageButton.zoomUp;
                createDivButton(controlDiv,src,buttonType,map);

            }break;
            case 'LOAD_IGC':
            {
                const src= deeafulWebStyle.imageButton.zoomDown;
                createDivButton(controlDiv,src,buttonType,map);
            }break;
            case 'ADD_POINT':
            {
                const src = deeafulWebStyle.imageButton.fullScreenOn;
                createDivButton(controlDiv,src,buttonType,map);
            }break;
            case 'REMOVE_POINT':
            {
                const src = deeafulWebStyle.imageButton.fullScreenOff;
                createDivButton(controlDiv,src,buttonType,map);
            }break;
            default:
            {
                console.log('WrongClass!!!');
            }
        }

   // }
}

function createRightFrame(controlDiv,map){


    const rightInfoWindow = document.createElement('div');
    rightInfoWindow.id = 'infoWindow';
    rightInfoWindow.style.width = '140px';
    rightInfoWindow.style.height = '120px';
    rightInfoWindow.style.margin = deeafulWebStyle.margin;
    rightInfoWindow.style.background ='#1E90FF';
    rightInfoWindow.innerText = 'x';
    controlDiv.appendChild(rightInfoWindow);
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
        case 'OSM':
        {
            const src = deeafulWebStyle.imageButton.emptyButton;
            createDivButton(controlDiv,src,buttonType,map);

        }
        break;
        /*case 'normalMap':
        {}
        break;*/
        default:
        {
            console.log('WrongClass!!!');
        }

    }




}
/**
 * Buttons event listeners
 * */
function addFullscreenEventLisner(buttonDiv,name) {
    if (name === 'FULLSCREEN_ON') {
        var click = 1;
        buttonDiv.addEventListener('click', function () {

            toggleFullScreenMode();

            if (click === 1) {
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



    if(name === 'ZOOM_UP')
    {
        buttonDiv.addEventListener('click',function () {
            var zoomLevel = map.getZoom();
            zoomLevel +=1;
            map.setZoom(zoomLevel);

        });

    }
    else if (name === 'ZOOM_DOWN')
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
function addOSMEventLisner(buttonDiv,map,name) {

    if (name === "OSM")
    {

        buttonDiv.addEventListener('click',function () {
            map = initOpenStreetMap();
        })




    }

}
/**
 * Download file event lisner 
 * 
*/
function addDownloadEventListener(buttonDiv,name) {
    
    if(name === 'DOWNLOAD_IGC'){
        
        buttonDiv.addEventListener('click',function () {

            downloadIGCfile('sadadasd','cos.txt','text/plain');


        });
        
    }
}
function downloadIGCfile(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // For IE 10
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others broswers
        var itemToDownload = document.createElement("a"),
            url = URL.createObjectURL(file);
        itemToDownload.href = url;
        itemToDownload.download = filename;
        document.body.appendChild(itemToDownload);
        itemToDownload.click();
        setTimeout(function() {
            document.body.removeChild(itemToDownload);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
function dispFile(contents) {
    document.getElementById('contents').innerHTML=contents
}
function openFile() {
    readFile = function(e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            var contents = e.target.result;
            fileInput.func(contents);
            document.body.removeChild(fileInput);
        };
        reader.readAsText(file)
    };
    fileInput = document.createElement("input");
    fileInput.type='file';
    fileInput.style.display='none';
    fileInput.onchange=readFile;
    fileInput.func=func;
    document.body.appendChild(fileInput);

}

function addLoadIGCEventListener(buttonDiv,map,name) {
    if(name === 'LOAD_IGC'){

        buttonDiv.addEventListener('click',function () {
            rFile();
        });
    }

}
function rFile(){
    var x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    x.style.border = deeafulWebStyle.buttons.border;
    x.style.borderRadius = deeafulWebStyle.buttons.borderRadius;
    x.style.margin = deeafulWebStyle.margin;
    document.getElementById('LOAD_IGC').appendChild(x);

}
/**
 * Map event listener
 * 
 * */



