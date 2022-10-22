
// SWITCH + TAB CONTROL
// A Function for disabling the tab corresponding to the generator switch
function tabDisable(tabName, checkState) {
  if (checkState == true) {
    var nodes = document.getElementById(tabName).getElementsByTagName("*");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].disabled = false;
    }
  } else if (checkState == false) {
    var nodes = document.getElementById(tabName).getElementsByTagName("*");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].disabled = true;
    }
  }
}
shapeState = document.getElementById("shaperCheck").checked = false;
colorState = document.getElementById("colorCheck").checked = false;
waveState = document.getElementById("waveCheck").checked = false;
reactionState = document.getElementById("reactionCheck").checked = false;
warpState = document.getElementById("warpCheck").checked = false;

tabDisable("shape-tab-page", shapeState);
document.getElementById("shaperCheck").addEventListener("change", (evt) => {
  shapeState = document.getElementById("shaperCheck").checked;
  tabDisable("shape-tab-page", shapeState);
});

tabDisable("color-tab-page", colorState);
document.getElementById("colorCheck").addEventListener("change", (evt) => {
  colorState = document.getElementById("colorCheck").checked;
  tabDisable("color-tab-page", colorState);
});

tabDisable("wave-tab-page", waveState);
document.getElementById("waveCheck").addEventListener("change", (evt) => {
  waveState = document.getElementById("waveCheck").checked;
  tabDisable("wave-tab-page", waveState);
});

tabDisable("reaction-tab-page", reactionState);
document.getElementById("reactionCheck").addEventListener("change", (evt) => {
  reactionState = document.getElementById("reactionCheck").checked;
  tabDisable("reaction-tab-page", reactionState);
});

tabDisable("warp-tab-page", warpState);
warpState = document.getElementById("warpCheck").checked;
document.getElementById("warpCheck").addEventListener("change", (evt) => {
  warpState = document.getElementById("warpCheck").checked;
  tabDisable("warp-tab-page", warpState);
});
