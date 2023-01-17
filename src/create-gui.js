import * as dat from "dat.gui";
import {
  labelTetriminosO,
  labelTetriminosS,
  labelTetriminosT,
  labelTetriminosL,
  labelTetriminosI,
} from "./config";

const createGUIForCube = (cube, gui) => {
  const cubeName = cube.name;
  const folder = gui.addFolder(cubeName);
  folder.add(cube.material, "wireframe").name("wireframes");
};

const createGUIControllerAnimation = (timeline, gui) => {
  const parameters = {
    play: () => {
      timeline.play();
    },
    pause: () => {
      timeline.pause();
    },
    reverse: () => {
      timeline.reverse();
    },
    // Animation label are played from the last "sequence", it's why playToTetriminoL start at labelTetriminosT
    pauseToTetriminoO: () => {
      timeline.pause(labelTetriminosL);
    },
    pauseToTetriminoL: () => {
      timeline.pause(labelTetriminosT);
    },
    pauseToTetriminoT: () => {
      timeline.pause(labelTetriminosS);
    },
    pauseToTetriminoS: () => {
      timeline.pause(labelTetriminosI);
    },
    pauseToTetriminoI: () => {
      timeline.pause(labelTetriminosO);
    },
    pauseToTetriminoO: () => {
      timeline.pause(labelTetriminosL);
    },
  };

  const folder = gui.addFolder("animation");

  for (const key of Object.keys(parameters)) {
    folder.add(parameters, key);
  }
};

const createAxeHelperGUI = (axesHelper, gui) => {
  gui.add(axesHelper, "visible");
};

export const createGUI = (cubes, timeline, axesHelper) => {
  const gui = new dat.GUI({
    closed: false,
    width: 300,
  });

  cubes.forEach((cube) => {
    createGUIForCube(cube, gui);
  });

  createGUIControllerAnimation(timeline, gui);

  createAxeHelperGUI(axesHelper, gui);
};
