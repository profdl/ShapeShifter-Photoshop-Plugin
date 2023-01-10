//  DEFAULT PRESET VARIABLES
presetShell();

//CREATE ANIMATION FRAME
document
  .getElementById("controlButton")
  .addEventListener("click", async function () {
    // Check layer kind
    var currentLayerKind = app.activeDocument?.activeLayers[0]?.kind;
    if (currentLayerKind != "pixel") {
      await createDialog();
    } else {
      //Duplicate Current Layer
      frameCounter = frameCounter + 1;
        duplicateLayer();

      //RUN GENERATORS
       waveMachine();
       shapeShift();
       warpShift();
       reactionDiffusion();
       colorShift();
       invert();
    }
    //Show Background Layer
     showBackground();
  }); //end

//CREATE TIMELINE FROM LAYERS ///////////////////////////////////
document
  .getElementById("animButton")
  .addEventListener("click", async function () {
    await exeModal(async function () {
      await batchPlay(
        [
          {
            _obj: "makeFrameAnimation",
            _options: {
              dialogOptions: "dontDisplay",
            },
          },
          {
            _obj: "animationFramesFromLayers",
            _options: {
              dialogOptions: "dontDisplay",
            },
          },
        ],
        {}
      ); // end batchplay
    }); // end modal

    //EXPORT AS VIDEO! /////////////////////
    if (exportState == true) {
      core.performMenuCommand({ commandID: -509 });
      core.performMenuCommand({ commandID: -507 });
      core.performMenuCommand({ commandID: -505 });
    }
  }); //End
