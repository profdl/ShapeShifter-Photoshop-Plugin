


function presetEvolvingCreature(){

//PRESET DEFAULTS - PANEL VARIABLES

//ANIMATION 
//GENERATORS

shapeState = document.getElementById("shaperCheck").checked = true;
colorState = document.getElementById("colorCheck").checked = true;
waveState = document.getElementById("waveCheck").checked = false;
reactionState = document.getElementById("reactionCheck").checked = true;
warpState = document.getElementById("warpCheck").checked = false;

tabDisable("shape-tab-page", shapeState);
tabDisable("color-tab-page", colorState);
tabDisable("wave-tab-page", waveState);
tabDisable("reaction-tab-page", reactionState);
tabDisable("warp-tab-page", warpState);

document.getElementById("mergeCheck").checked = true;
mergeState = true;

//EXPORT
document.getElementById("exportCheck").checked = true;
exportState = true;

// COLOR PANEL 
hueNum = document.getElementById("hueSlider").value = 5;

satNum = document.getElementById("satSlider").value = 2;

valNum = document.getElementById("valSlider").value = -5;

invertState = document.getElementById("invertCheck").checked = true;



//REACTION DIFFUSION
highpassNum = document.getElementById("highpass").value = 8;
blurNum = document.getElementById("blur").value = 5;
blackWhite = document.getElementById("bw").checked = false
posterizeNum = document.getElementById("posterize").value = 4;
posterizeMenu = document.getElementById("posterize").checked = false;
document.getElementById("posterize").disabled = true;


//SHAPE SHIFT
xNum = document.getElementById("xInput").value = -12;
yNum = document.getElementById("yInput").value = -41;
rotNum = document.getElementById("rotInput").value = 13;
scaleInput = document.getElementById("scaleInput").value = 93;
mirrorHState = document.getElementById("mirrorHCheck").checked = true;
mirrorVState = document.getElementById("mirrorVCheck").checked = false;
mirrorHDistNum = document.getElementById("mirrorHDist").value = 10;
mirrorVDistNum = document.getElementById("mirrorVDist").value = 8;


//WARP SHIFT
warpXNum = document.getElementById("warpXInput").value = 10;
warpYNum = document.getElementById("warpYInput").value = 10;
warpScaleNum = document.getElementById("warpScaleInput").value = 97;


//WAVE
var waveH = document.getElementById("waveHslider").value = 10;
var waveV = document.getElementById("waveVslider").value = 10;
var offsetH = document.getElementById("offsetHslider").value =50;
var offsetV = document.getElementById("offsetVslider").value = 5;

};