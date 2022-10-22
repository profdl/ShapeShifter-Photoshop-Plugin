// BASIC elements for a plugin ///////////////////////////////////
var batchPlay = require("photoshop").action.batchPlay;
var core = require("photoshop").core;
var exeModal = require("photoshop").core.executeAsModal;
var psAlert = require("photoshop").core.showAlert;
var app = require("photoshop").app;

//CHECK FOR OPEN DOC
const docexists = () => {
  return Boolean(app.documents?.length)
}
const exists = docexists()
  console.log(exists) // true | false
// END CHECK FOR OPEN DOC

if (exists == true){
  var currentDocument = app.activeDocument;
  var layers = currentDocument.layers;
  var layerCount = layers.length;
  var currentLayer = layers[0];
  var layerBounds = currentLayer.bounds;
  var currentlayerID = currentLayer.id;
  
  var myLayerKind = currentLayer.kind;
  var layerName = currentLayer.name;
  var height = require("photoshop").app.activeDocument.height;
  var width = require("photoshop").app.activeDocument.width;
  }


//SET DOCUMENT RELATED VARIABLES
document
  .getElementById("controlButton")
  .addEventListener("click", async function () {

if (exists == true){
var currentDocument = app.activeDocument;
var layers = currentDocument.layers;
var layerCount = layers.length;
var currentLayer = app.activeDocument?.activeLayers[0]?.name ;
var currentLayerKind = app.activeDocument?.activeLayers[0]?.kind ;
var height = require("photoshop").app.activeDocument.height;
var width = require("photoshop").app.activeDocument.width;
}

// // CHECK LAYER KIND
// if (currentLayerKind == 'pixel'){
//   console.log('IS Pixel Layer: ' + currentLayer+': ' + currentLayerKind);
// }else {
//   console.log('NOT pixel layer: ' + currentLayer +': '+ currentLayerKind);
//   createDialog();
// }
// // END CHECK LAYER KIND

});
//end doc variables



//TABS ////////////////////////////////////////////
// attach event listeners for tabs
Array.from(document.querySelectorAll(".sp-tab")).forEach(theTab => {
  theTab.onclick = () => {
    localStorage.setItem("currentTab", theTab.getAttribute("id"));
    Array.from(document.querySelectorAll(".sp-tab")).forEach(aTab => {
      if (aTab.getAttribute("id") === theTab.getAttribute("id")) {
        aTab.classList.add("selected");
      } else {
        aTab.classList.remove("selected");
      }
    });
    Array.from(document.querySelectorAll(".sp-tab-page")).forEach(tabPage => {
      if (tabPage.getAttribute("id").startsWith(theTab.getAttribute("id"))) {
        tabPage.classList.add("visible");
      } else {
        tabPage.classList.remove("visible");
      }
    });
  }
});



// ALERT FUNCTION
async function createDialog() {
  dialog = document.createElement("dialog");
  dialog.style.color = "white";
  div = document.createElement("div");
  div.style.display = "block";
  div.style.height = "100px";
  div.style.lineHeight = "21px";

  div.style.width = "500px";
  div.style.padding = "30px";
  header = document.createElement("h2");
  header.id = "head";
  header.style.color = "white";
  header.textContent = "Shape Shift does not work on Text, Adjustment, or Vector Shape Layers . Try rasterizing the layer first (LAYER > RASTERIZE > ALL LAYERS).";
  div.appendChild(header);
  dialog.appendChild(div);
   document.body.appendChild(dialog).showModal();
}
//END ALERT FUNCTION


//RANDOMIZE FUNCTIONS //////////////////////////////////////////

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomXY(max) {
  r1 = randomNumber(0 - max / 2, max - max / 4);
  r2 = randomNumber(1, max + max / 2);
  if (r1 == r2) {
    randomXY(max);
  }
}
function randomArray(sides, max) {
  arr = [];
  for (let i = 0; i < sides; i++) {
    arr.push(randomNumber(0, max));
  }
  return arr;
}
//////////////// END RANDOMIZE FUNCTIONS

// COPIED THIS FROM KITCHEN SINK EXAMPLE

const { entrypoints } = require("uxp");

// reusable function for flyouts and command
// const reloadPlugin = () => {
//   window.location.reload();
// };

// set up entry points -- this defines the Reload Plugin handler
// and the panel (including its associated flyout items)
entrypoints.setup({
  // plugin: {
  //   create: () => console.log("Created"),
  //   destroy: () => console.log("Destroyed"),
  // },
  // commands: {
  //   reloadPlugin: () => reloadPlugin(),
  // },
  panels: {
    controlPanel: {
      show() {
        const currentPage = localStorage.getItem("currentPage") || "sp-heading";
        // selectPage(currentPage) ;
      },
      menuItems: [
        // {
        //   id: "reloadPanelFlyout",
        //   label: "Reload Panel",
        //   checked: false,
        //   enabled: true,
        // },
        // {
        //   id: "showDialog",
        //   label: "Show Dialog",
        //   checked: false,
        //   enabled: true,
        // },
      ],
      // invokeMenu(id) {
      //   switch (id) {
      //     case "reloadPanelFlyout":
      //       reloadPlugin();
      //       break;
      //     case "showDialog":
      //       openProgrammaticDialog();
      //       break;
      //   }
      // },
    },
    generatorsPanel: {
      show(node, ...args) {
        console.log("showing generatorsPanel panel", args);
        const waveMachine = document.querySelector("#generatorsPanel");
        if (node.node)
          /* this works for manifest v4 */
          node.node.appendChild(waveMachine);
        /* this works for manifest v5 */ else node.appendChild(waveMachine);
        waveMachine.classList.add("visible");
      },
    }
  },
});
