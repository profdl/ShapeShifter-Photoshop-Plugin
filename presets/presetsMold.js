

function presetMold(){

//PRESET DEFAULTS - PANEL VARIABLES

//ANIMATION 
//GENERATORS
shapeState = document.getElementById("shaperCheck").checked = false;
colorState = document.getElementById("colorCheck").checked = false;
waveState = document.getElementById("waveCheck").checked = false;
reactionState = document.getElementById("reactionCheck").checked = true;
warpState = document.getElementById("warpCheck").checked = false;
mergeState = document.getElementById("mergeCheck").checked = true;

tabDisable("shape-tab-page", shapeState);
tabDisable("color-tab-page", colorState);
tabDisable("wave-tab-page", waveState);
tabDisable("reaction-tab-page", reactionState);
tabDisable("warp-tab-page", warpState);



//EXPORT
document.getElementById("exportCheck").checked = true;
exportState = true;

// COLOR PANEL 
document.getElementById("hueSlider").value = 5;
hueNum = 5;
satNum = document.getElementById("satSlider").value = 2;
satNum = 2;
valNum = document.getElementById("valSlider").value = -5;
valNum = -5;
document.getElementById("invertCheck").checked = true;
invertState = true;


//REACTION DIFFUSION
highpassNum = document.getElementById("highpass").value = 8;
blurNum = document.getElementById("blur").value = 5;
blackWhite = document.getElementById("bw").checked = true
posterizeNum = document.getElementById("posterize").value = 4;
posterizeMenu = document.getElementById("posterize").checked = false;
document.getElementById("posterize").disabled = true;


//SHAPE SHIFT
xNum = document.getElementById("xInput").value = 10;
yNum = document.getElementById("yInput").value = -5;
rotNum = document.getElementById("rotInput").value = 5;
scaleInput = document.getElementById("scaleInput").value = 98;
mirrorHState = document.getElementById("mirrorHCheck").checked = false;
mirrorVState = document.getElementById("mirrorVCheck").checked = false;
mirrorHDistNum = document.getElementById("mirrorHDist").value = 10;
mirrorVDistNum = document.getElementById("mirrorVDist").value = 10;


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