


//REACTION DIFFUSION FUNCTION

async function reactionDiffusion(){
  var currentLayerKind = app.activeDocument?.activeLayers[0]?.kind ;

    
  //IS CHECKED?
          if (reactionState == true && currentLayerKind == 'pixel'){
  
      /// RUN MAIN LOOP ///////////////////////////////////
  
        await exeModal(async function () {
          await batchPlay(
            [
              {
                _obj: "highPass",
                radius: {
                  _unit: "pixelsUnit",
                  _value: highpassNum,
                },
                _options: {
                  dialogOptions: "dontDisplay",
                },
              },
              {
                _obj: "gaussianBlur",
                radius: {
                  _unit: "pixelsUnit",
                  _value: blurNum,
                },
                _options: {
                  dialogOptions: "dontDisplay",
                },
              },
              {
                _obj: "posterization",
                levels: posterizeNum,
                _options: {
                  dialogOptions: "dontDisplay",
                },
              },
              {
                _obj: "unsharpMask",
                amount: {
                  _unit: "percentUnit",
                  _value: 500,
                },
                radius: {
                  _unit: "pixelsUnit",
                  _value: 20,
                },
                threshold: 0,
                _options: {
                  dialogOptions: "dontDisplay",
                },
              },
  
              {
                _obj: "invert",
                _options: {
                  dialogOptions: "dontDisplay",
                },
              },
              {
                _obj: "set",
                _target: [
                  {
                    _ref: "layer",
                    _enum: "ordinal",
                    _value: "targetEnum",
                  },
                ],
                to: {
                  _obj: "layer",
                  mode: {
                    _enum: "blendMode",
                    _value: "pinLight",
                  },
                },
                _options: {
                  dialogOptions: "dontDisplay",
                },
              },
            ],
            {}
          ); //end batchplay
        }); //end modal
  
        if (blackWhite == true) {
          await exeModal(async function () {
            await batchPlay(
              [
                {
                  _obj: "thresholdClassEvent",
                  level: 128,
                  _options: {
                    dialogOptions: "dontDisplay",
                  },
                },
              ],
              {}
            ); //end batchplay
          }); //end modal
        }
  
        //end reaction diffusion
      } //end loop
  
      /// SET LAYER TO NORMAL BLEND MODE
      await exeModal(async function () {
        await batchPlay(
          [
            {
              _obj: "set",
              _target: [
                {
                  _ref: "layer",
                  _enum: "ordinal",
                  _value: "targetEnum",
                },
              ],
              to: {
                _obj: "layer",
                mode: {
                  _enum: "blendMode",
                  _value: "normal",
                },
              },
              _options: {
                dialogOptions: "dontDisplay",
              },
            },
          ],
          {}
        ); //end batchplay
      }); //end modal
  
  
}
