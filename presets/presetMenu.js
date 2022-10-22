presetMenuSelection = "shell";
document.getElementById("presetMenuInput").addEventListener("change", (evt) => {
  presetMenuSelection = document.getElementById("presetMenuInput").value;
  if (presetMenuSelection == "shell") {
    presetShell();
  } else if (presetMenuSelection == "moldGrowth") {
    presetMold();
  } else if (presetMenuSelection == "ripple") {
    presetRipple();
  } else if (presetMenuSelection == "mirrorBuild") {
    presetMirrorBuild();
  } else if (presetMenuSelection == "evolvingCreature") {
    presetEvolvingCreature();
  }
});
