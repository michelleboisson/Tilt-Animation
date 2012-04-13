var LR ;
var FB;
var DIR;

function init(){
 
    if (window.DeviceOrientationEvent) {
        console.log("DeviceOrientation is supported");
        window.addEventListener('deviceorientation', function(eventData) {
            LR = eventData.gamma;
            FB = eventData.beta;
            DIR = eventData.alpha;
            console.log(eventData.alpha);
            deviceOrientationHandler(LR, FB, DIR);
        });
    }else if (window.OrientationEvent) {
        // Listen for the MozOrientation event and handle OrientationData object
        window.addEventListener('MozOrientation', function(eventData){
            LR = eventData.x * 90;

            // y is the front-to-back tilt from -1 to +1, so we need to convert to degrees
            // We also need to invert the value so tilting the device towards us (forward) 
            // results in a positive value. 
            FB = eventData.y * -90;
        
            // MozOrientation does not provide this data
            //DIR = null;
        
            // z is the vertical acceleration of the device
            DIR = eventData.z;
        
        });
    }else{
        alert("Sorry Device Orientation is not supported!");
    }
}

//functions used in the processing sketch
function getXTilt(){
    return LR*2;
}
function getYTilt(){
    return FB*2;
}

function deviceOrientationHandler(LR, FB, DIR) {
    
    
    //console.log("LR = "+LR);
    //console.log("FB = "+FB);
    console.log("DIR = "+DIR);
    
    //for webkit browser
    //document.getElementById("imgLogo").style.webkitTransform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";
 
    //for HTML5 standard-compliance
    //document.getElementById("imgLogo").style.transform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";
}

    
    


window.addEventListener("load", init, false);