
//SHAPE SHIFT FUNCTION

async function shapeShift() {
  var currentLayerKind = app.activeDocument?.activeLayers[0]?.kind;

  //is shape shifter checked
  if (shapeState == true && currentLayerKind == "pixel") {
    /// duplicate for recursion
    if (mergeState == true) {
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
              ID: [23],
              _options: {
                dialogOptions: "dontDisplay",
              },
            },
          ],
          {}
        ); // end batchplay
      }); // end modal
    } //end if

    //MOVE ///////////////////////////////////
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
            offset: {
              _obj: "offset",
              horizontal: {
                _unit: "pixelUnit",
                _value: xNum,
              },
              vertical: {
                _unit: "pixelUnit",
                _value: yNum,
              },
            },
            linked: true,
            interfaceIconFrameDimmed: {
              _enum: "interpolationType",
              _value: "bicubicAutomatic",
            },
            _options: {
              dialogOptions: "dontDisplay",
            },
          },
        ],
        {}
      ); //end batchplay
    }); //end modal
    //end MOVE

    // ROTATE ////////////////////////////
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
            angle: {
              _unit: "angleUnit",
              _value: rotNum,
            },
            linked: true,
            interfaceIconFrameDimmed: {
              _enum: "interpolationType",
              _value: "bicubicSmoother",
            },
            _options: {
              dialogOptions: "dontDisplay",
            },
          },
        ],
        {}
      ); //end batchplay
    }); //end modal
    // end rotate

    ////////MIRROR //////////////////////////////
    // IF MIRROR H
    if (shapeState == true && mirrorHState == true) {
      await exeModal(async function () {
        await batchPlay(
          [
            // duplicate layer
            {
              _obj: "duplicate",
              _target: [
                {
                  _ref: "layer",
                  _enum: "ordinal",
                  _value: "targetEnum",
                },
              ],
              version: 5,
              ID: [21],
              _options: {
                dialogOptions: "dontDisplay",
              },
            },
            //flip layer H
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
              offset: {
                _obj: "offset",
                horizontal: {
                  _unit: "distanceUnit",
                  _value: 1,
                },
                vertical: {
                  _unit: "distanceUnit",
                  _value: 0,
                },
              },
              width: {
                _unit: "percentUnit",
                _value: -99.99999999999999,
              },
              interfaceIconFrameDimmed: {
                _enum: "interpolationType",
                _value: "bicubicSmoother",
              },
              _options: {
                dialogOptions: "dontDisplay",
              },
            },

            //merge mirror
            {
              _obj: "mergeLayersNew",
              _options: {
                dialogOptions: "dontDisplay",
              },
            },
          ],
          {}
        ); //end batchplay
      }); //end modal
    }
    // END MIRROR H

    // IF MIRROR V
    if (shapeState == true && mirrorVState == true) {
      await exeModal(async function () {
        await batchPlay(
          [
            // duplicate layer
            {
              _obj: "duplicate",
              _target: [
                {
                  _ref: "layer",
                  _enum: "ordinal",
                  _value: "targetEnum",
                },
              ],
              version: 5,
              ID: [21],
              _options: {
                dialogOptions: "dontDisplay",
              },
            },
            //flip layer H
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
              offset: {
                _obj: "offset",
                horizontal: {
                  _unit: "distanceUnit",
                  _value: 1,
                },
                vertical: {
                  _unit: "distanceUnit",
                  _value: 0,
                },
              },
              height: {
                _unit: "percentUnit",
                _value: -100,
              },
              interfaceIconFrameDimmed: {
                _enum: "interpolationType",
                _value: "bicubicSmoother",
              },
              _options: {
                dialogOptions: "dontDisplay",
              },
            },

            //merge mirror
            {
              _obj: "mergeLayersNew",
              _options: {
                dialogOptions: "dontDisplay",
              },
            },
          ],
          {}
        ); //end batchplay
      }); //end modal
    }
    // END MIRROR V

    // RECURSION
    if (mergeState == true && currentLayerKind == "pixel") {
      await exeModal(async function () {
        await batchPlay(
          [
            {
              _obj: "mergeLayersNew",
              _options: {
                dialogOptions: "dontDisplay",
              },
            },

            // ALIGN LAYERS TO CENTER
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
    } //end if merge

    if (mergeState == true && shapeState == true && warpState == true) {
      await exeModal(async function () {
        await batchPlay(
          [
            {
              _obj: "mergeLayersNew",
              _options: {
                dialogOptions: "dontDisplay",
              },
            },
          ],
          {}
        ); //end batchplay
      }); //end modal
    } //end if merge

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
              _value: scaleInput,
            },
            height: {
              _unit: "percentUnit",
              _value: scaleInput,
            },
          },
        ],
        {}
      ); //end batchplay
    }); //end modal
  } //END IF
} //END
// END SHAPE SHIFT
