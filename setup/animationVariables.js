//VARIABLES FOR ANIMATION TOOLS PANEL

document.getElementById("mergeCheck").addEventListener("change", (evt) => {
  mergeState = document.getElementById("mergeCheck").checked;
});

exportState = true;
document.getElementById("exportCheck").addEventListener("change", (evt) => {
  exportState = document.getElementById("exportCheck").checked;
});

var frameCounter = 1;


/// SHAPE SHIFTER

xNum = document.getElementById("xInput").value;
document.getElementById("xInput").addEventListener("input", (evt) => {
  xNum = evt.target.value;
});

yNum = document.getElementById("yInput").value;
document.getElementById("yInput").addEventListener("input", (evt) => {
  yNum = evt.target.value;
});

rotNum = document.getElementById("rotInput").value;
document.getElementById("rotInput").addEventListener("input", (evt) => {
  rotNum = evt.target.value;
});

scaleInput = document.getElementById("scaleInput").value;
document.getElementById("scaleInput").addEventListener("input", (evt) => {
  scaleInput = evt.target.value;
});

mirrorHState = document.getElementById("mirrorHCheck").checked;
document.getElementById("mirrorHCheck").addEventListener("change", (evt) => {
  mirrorHState = document.getElementById("mirrorHCheck").checked;
});

mirrorVState = document.getElementById("mirrorVCheck").checked;
document.getElementById("mirrorVCheck").addEventListener("change", (evt) => {
  mirrorVState = document.getElementById("mirrorVCheck").checked;
});

mirrorHDistNum = document.getElementById("mirrorHDist").value;
document.getElementById("mirrorHDist").addEventListener("input", (evt) => {
  mirrorHDistNum = evt.target.value;
});

mirrorVDistNum = document.getElementById("mirrorVDist").value;
document.getElementById("mirrorVDist").addEventListener("input", (evt) => {
  mirrorVDistNum = evt.target.value;
});

//COLOR VARIABLES
document.getElementById("hueSlider").addEventListener("change", (tb1) => {
  hueNum = tb1.target.value;
});
document.getElementById("satSlider").addEventListener("change", (tb1) => {
  satNum = tb1.target.value;
});
document.getElementById("valSlider").addEventListener("change", (tb1) => {
  valNum = tb1.target.value;
});
document.getElementById("invertCheck").addEventListener("change", (evt) => {
  invertState = document.getElementById("invertCheck").checked;
});

/// REACTION DIFFUSION VARIABLES
highpassNum = document.getElementById("highpass").value;
document.getElementById("highpass").addEventListener("change", (tb1) => {
  highpassNum = tb1.target.value;
});

blurNum = document.getElementById("blur").value;
document.getElementById("blur").addEventListener("change", (tb1) => {
  blurNum = tb1.target.value;
});

posterizeMenu = document.getElementById("posterize").checked;
document.getElementById("posterize").addEventListener("change", (tb1) => {
  posterizeMenu = tb1.target.checked;
});

posterizeNum = document.getElementById("posterize").value;
document.getElementById("posterize").addEventListener("change", (tb1) => {
  posterizeNum = tb1.target.value;
});

blackWhite = document.getElementById("bw").checked;
if (blackWhite == true) {
  document.getElementById("posterize").disabled = true;
} else {
  document.getElementById("posterize").disabled = false;
}
document.getElementById("bw").addEventListener("change", (evt) => {
  blackWhite = document.getElementById("bw").checked;
  if (blackWhite == true) {
    document.getElementById("posterize").disabled = true;
  } else {
    document.getElementById("posterize").disabled = false;
  }
});

//WAVE VARIABLES

var waveH = document.getElementById("waveHslider").value;
document.getElementById("waveHslider").addEventListener("change", (tb1) => {
  waveH = tb1.target.value;
  console.log(waveH);
});

var waveV = document.getElementById("waveVslider").value;
document.getElementById("waveVslider").addEventListener("change", (tb1) => {
  waveV = tb1.target.value;
  console.log(waveV);
});

var offsetH = document.getElementById("offsetHslider").value;
document.getElementById("offsetHslider").addEventListener("change", (tb1) => {
  offsetH = tb1.target.value;
  console.log(offsetH);
});

var offsetV = document.getElementById("offsetVslider").value;
document.getElementById("offsetVslider").addEventListener("change", (tb1) => {
  offsetV = tb1.target.value;
  console.log(offsetH);
});

/// WARP VARIABLES
warpXNum = document.getElementById("warpXInput").value;
document.getElementById("warpXInput").addEventListener("input", (evt) => {
  warpXNum = evt.target.value;
});

warpYNum = document.getElementById("warpYInput").value;
document.getElementById("warpYInput").addEventListener("input", (evt) => {
  warpYNum = evt.target.value;
});

warpScaleNum = document.getElementById("warpScaleInput").value;
document.getElementById("warpScaleInput").addEventListener("input", (evt) => {
  warpScaleNum = evt.target.value;
});
