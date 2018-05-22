
function DeafulWebStyle() {

     this.margin = '14px';
     this.spaceBetweenButton = '12px';
     this.marginLeft = '10px';
     this.marginRight = '10px';

    function FontWeb() {
        this.fontName ="Roboto,Arial,sans-serif";
        this.color = 'rgb(25,50,25)';
        this.size = '14';
        this.height = '26px';
        this.padding = '5px';
    }

    function DefaultButton() {
        this.width = '30px';
        this.height = '30px';
        this.backgroundColor = '#fff';
        this.border = '2px solid #1E90FF';              //frame
        this.borderRadius = '3px';                      //radiusButton
        this.shadow =  '0 2px 6px rgba(0,0,0,.3)';      //Shadow
        this.setCursor = 'pointer';
        this.textPos = 'center';
        this.setClickedButtonColor = '#ccccff';
    }
    function ImageButtons() {
        this.addTuringPoint = 'webImages/googleMapImg/addTuringImg1.png';
        this.removeTuringPoint = 'webImages/googleMapImg/rmTuringImg1.png';
        this.zoomUp = 'webImages/googleMapImg/zoomUpImg1.png';
        this.zoomDown = 'webImages/googleMapImg/zoomDownImg1.png';
        this.fullScreenOn = 'webImages/googleMapImg/fullscreenImg2.png';
        this.fullScreenOff = 'webImages/googleMapImg/fullscreenoffImg1.png';
    //    this.normalMap = 'webImages/googleMapImg/';
    //    this.sateliteMap = 'webImages/googleMapImg/';
        this.emptyButton = 'webImages/googleMapImg/emptyButtonImg.png';
     }

    this.fontt = new FontWeb();
    this.buttons = new DefaultButton();
    this.imageButton = new ImageButtons();
}
