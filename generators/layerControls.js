
//DUPLICATE LAYER FUNCTION

async function duplicateLayer(){

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
            {
              _obj: "show",
              null: [
                {
                  _ref: "layer",
                  _enum: "ordinal",
                  _value: "targetEnum",
                },
              ],
              toggleOptionsPalette: true,
              _options: {
                dialogOptions: "dontDisplay",
              },
            },
          ],
          {}
        ); // end batchplay
      }); // end modal
};



//SHOW BACKGROUND
async function showBackground() {
    var currentDocument = app.activeDocument;
    var layers = currentDocument.layers;
    var layerCount = layers.length;
    var firstLayer = layers[layerCount - 1].name;

    if (firstLayer == "Background") {
      await exeModal(async function () {
        await batchPlay(
          [
            {
              _obj: "show",
              null: [
                {
                  _ref: "layer",
                  _property: "background",
                },
              ],
              _options: {
                dialogOptions: "dontDisplay",
              },
            },
          ],
          {}
        ); // end batchplay
      }); // end modal
    }
  };