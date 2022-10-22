


//COLOR SHIFT FUNCTION

async function colorShift(){
    var currentLayerKind = app.activeDocument?.activeLayers[0]?.kind ;
    //IS CHECKED?
    if (colorState == true && currentLayerKind == 'pixel') {
      await exeModal(async function () {
        await batchPlay(
          [
            {
              _obj: "hueSaturation",
              presetKind: {
                _enum: "presetKindType",
                _value: "presetKindCustom",
              },
              colorize: false,
              adjustment: [
                {
                  _obj: "hueSatAdjustmentV2",
                  hue: hueNum,
                  saturation: satNum,
                  lightness: valNum,
                },
              ],
              _options: {
                dialogOptions: "dontDisplay",
              },
            },
          ],
          {}
        ); //end batchplay
      }); //end modal
    } //END IF
  }; //END FUNCTION
  

async function invert(){
  var currentLayerKind = app.activeDocument?.activeLayers[0]?.kind ;

  //IS CHECKED?
  if (invertState == true && currentLayerKind == 'pixel') {
    await exeModal(async function () {
      await batchPlay(
        [
          {
            _obj: "invert",
            _options: {
               dialogOptions: "dontDisplay"
            }
         }
        ],
        {}
      ); //end batchplay
    }); //end modal
  } //END IF
}

  
