


// WARP FUNCTION ///////////////////////////////////
 async function warpShift() {
    //IS CHECKED?
    if (warpState == true) {

//// CREATE  FRAME FOR RECURSION ///////////////////////////////////
if(mergeState == true && warpState == true ){
  await exeModal(async function () {
    await batchPlay(
      [
        {
          _obj: "duplicate",
          _target: [
            {
              _ref: "layer",
              _enum: "ordinal",
              _value: "targetEnum",
            },
          ],
          name: "frame_" + frameCounter,
          version: 5,
          ID: [frameCounter],
          _options: {
            dialogOptions: "dontDisplay",
          },
          
        }
      ],
      {}
    ); // end batchplay
  }); // end modal
};//end if
     

      //WARP X ///////////////////////////////////
      await exeModal(async function () {
        await batchPlay(
          [
            // WARP X
            {
              _obj: "transform",
              _target: [
                 {
                    _ref: "layer",
                    _enum: "ordinal",
                    _value: "targetEnum"
                 }
              ],
              freeTransformCenterState: {
                 _enum: "quadCenterState",
                 _value: "QCSAverage"
              },
              offset: {
                 _obj: "offset",
                 horizontal: {
                    _unit: "distanceUnit",
                    _value: 1
                 },
                 vertical: {
                    _unit: "distanceUnit",
                    _value: 0
                 }
              },
              width: {
                 _unit: "percentUnit",
                 _value: 100
              },
              height: {
                 _unit: "percentUnit",
                 _value: 100
              },
              warp: {
                 _obj: "warp",
                 warpStyle: {
                    _enum: "warpStyle",
                    _value: "warpArc"
                 },
                 warpValue: warpXNum,
                 warpPerspective: 0,
                 warpPerspectiveOther: 0,
                 warpRotate: {
                    _enum: "orientation",
                    _value: "horizontal"
                 },
                 bounds: {
                    _obj: "classFloatRect",
                    top: 100,
                    left: 100,
                    bottom: 400,
                    right: 400
                 },
                 uOrder: 4,
                 vOrder: 2
              },
              interfaceIconFrameDimmed: {
                 _enum: "interpolationType",
                 _value: "bicubicSmoother"
              },
              _options: {
                 dialogOptions: "dontDisplay"
              }
           },
        
           // WARP Y
                       {
                        _obj: "transform",
                        _target: [
                           {
                              _ref: "layer",
                              _enum: "ordinal",
                              _value: "targetEnum"
                           }
                        ],
                        freeTransformCenterState: {
                           _enum: "quadCenterState",
                           _value: "QCSAverage"
                        },
                        offset: {
                           _obj: "offset",
                           horizontal: {
                              _unit: "distanceUnit",
                              _value: 0
                           },
                           vertical: {
                              _unit: "distanceUnit",
                              _value: 1
                           }
                        },
                        width: {
                           _unit: "percentUnit",
                           _value: 100
                        },
                        height: {
                           _unit: "percentUnit",
                           _value: 100
                        },
                        warp: {
                           _obj: "warp",
                           warpStyle: {
                              _enum: "warpStyle",
                              _value: "warpArc"
                           },
                           warpValue: warpYNum,
                           warpPerspective: 0,
                           warpPerspectiveOther: 0,
                           warpRotate: {
                              _enum: "orientation",
                              _value: "vertical"
                           },
                           bounds: {
                              _obj: "classFloatRect",
                              top: 100,
                              left: 100,
                              bottom: 400,
                              right: 400
                           },
                           uOrder: 4,
                           vOrder: 2
                        },
                        interfaceIconFrameDimmed: {
                           _enum: "interpolationType",
                           _value: "bicubicSmoother"
                        },
                        _options: {
                           dialogOptions: "dontDisplay"
                        }
                     }


          ],
          {}
        ); //end batchplay
      }); //end modal
      //end warp 



  

// RECURSION
//merge
if (mergeState == true && shapeState ==false && warpState==true && currentLayerKind == 'pixel') {
  await exeModal(async function () {
  await batchPlay(
    [    
      {
        _obj: "mergeLayersNew",
        _options: {
           dialogOptions: "dontDisplay"
        }
     }
    ],
    {}
  ); //end batchplay
}); //end modal
}//end if merge

//align
if (mergeState == true && shapeState ==false && warpState==true) {
  await exeModal(async function () {
  await batchPlay(
    [
      {
        _obj: "set",
        _target: [
          {
            _ref: "channel",
            _property: "selection",
          },
        ],
        to: {
          _enum: "ordinal",
          _value: "allEnum",
        },
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
      {
        _obj: "align",
        _target: [
          {
            _ref: "layer",
            _enum: "ordinal",
            _value: "targetEnum",
          },
        ],
        using: {
          _enum: "alignDistributeSelector",
          _value: "ADSCentersV",
        },
        alignToCanvas: true,
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
      {
        _obj: "align",
        _target: [
          {
            _ref: "layer",
            _enum: "ordinal",
            _value: "targetEnum",
          },
        ],
        using: {
          _enum: "alignDistributeSelector",
          _value: "ADSCentersH",
        },
        alignToCanvas: true,
        _options: {
          dialogOptions: "dontDisplay",
        },
      },
      {
        _obj: "set",
        _target: [
          {
            _ref: "channel",
            _property: "selection",
          },
        ],
        to: {
          _enum: "ordinal",
          _value: "none",
        },
        _options: {
          dialogOptions: "dontDisplay",
        },
      },

    ],
    {}
  ); //end batchplay
}); //end modal
}//end if merge
// END RECURSION




      // SCALE ////
      await exeModal(async function () {
        await batchPlay(
          [
            {
              _obj: "transform",
              _target: [
                {
                  _ref: "layer",
                  _enum: "ordinal",
                  _value: "targetEnum",
                },
              ],
              freeTransformCenterState: {
                _enum: "quadCenterState",
                _value: "QCSAverage",
              },
              width: {
                _unit: "percentUnit",
                _value: warpScaleNum-warpXNum/2,
              },
              height: {
                _unit: "percentUnit",
                _value: warpScaleNum-warpYNum/2,
              },
            },
          ],
          {}
        ); //end batchplay
      }); //end modal
  



    } //END IF WARP
  }; //END 




  