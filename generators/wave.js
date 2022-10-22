


// WAVE MACHINE FUNCTION

async function waveMachine() {
    
    //IS CHECKED?
    if (waveState == true){

    //START LOOP
  
      //START exeModal
      await exeModal(async function () {
        await batchPlay(
          [
            //WAVE
            {
              _obj: "wave",
              waveType: {
                _enum: "waveType",
                _value: "waveSine",
              },
              numberOfGenerators: 1,
              wavelengthMin: 1,
              wavelengthMax: 999,
              amplitudeMin: 1,
              amplitudeMax: 999,
              scaleHorizontal: waveH,
              scaleVertical: waveV,
              undefinedArea: {
                _enum: "undefinedArea",
                _value: "wrapAround",
              },
              randomSeed: 107469,
              _options: {
                dialogOptions: "dontDisplay",
              },
            },
            //OFFSET
            {
              _obj: "offset",
              horizontal: offsetH,
              vertical: offsetV,
              fill: {
                 _enum: "fillMode",
                 _value: "wrap"
              },
              _options: {
                 dialogOptions: "dontDisplay"
              }
           },
           //SHARPEN
           {
            _obj: "unsharpMask",
            amount: {
               _unit: "percentUnit",
               _value: 1
            },
            radius: {
               _unit: "pixelsUnit",
               _value: 1
            },
            threshold: 0,
            _options: {
               dialogOptions: "dontDisplay"
            }
         }
        
          ],
          {}
        );
      }); //END MODAL



            // //COLOR SHIFT ///////////////////////////////////
            
            //   await exeModal(async function () {
            //     await batchPlay(
            //       [
            //         {
            //           _obj: "hueSaturation",
            //           presetKind: {
            //             _enum: "presetKindType",
            //             _value: "presetKindCustom",
            //           },
            //           colorize: false,
            //           adjustment: [
            //             {
            //               _obj: "hueSatAdjustmentV2",
            //               hue: hueNum,
            //               saturation: satNum,
            //               lightness: valNum,
            //             },
            //           ],
            //           _options: {
            //             dialogOptions: "dontDisplay",
            //           },
            //         },
            //       ],
            //       {}
            //     ); //end batchplay
            //   }); //end modal
            
            // //end color shift



    } //END LOOP
  }; // END BUTTON CLICK ///////////////////////////////////
