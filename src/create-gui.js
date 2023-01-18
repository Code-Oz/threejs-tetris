import * as dat from "dat.gui";
import {
  tetriminosO,
  tetriminosL,
  tetriminosT,
  tetriminosS,
  tetriminosI,
} from "./config";

import { tetriminosMapping } from "./utils";
import {
  redTexture,
  pinkTexture,
  greenTexture,
  yellowTexture,
} from "./textures";

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
      timeline.pause(tetriminosMapping[tetriminosO]);
    },
    pauseToTetriminoL: () => {
      timeline.pause(tetriminosMapping[tetriminosL]);
    },
    pauseToTetriminoT: () => {
      timeline.pause(tetriminosMapping[tetriminosT]);
    },
    pauseToTetriminoS: () => {
      timeline.pause(tetriminosMapping[tetriminosS]);
    },
    pauseToTetriminoI: () => {
      timeline.pause(tetriminosMapping[tetriminosI]);
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

const createTexturesGUI = (cubes, gui) => {
  const folder = gui.addFolder("textures");

  const parameters = {
    green: () => {
      cubes.forEach((cube) => {
        cube.material.map = greenTexture;
      });
    },
    pink: () => {
      cubes.forEach((cube) => {
        cube.material.map = pinkTexture;
      });
    },
    yellow: () => {
      cubes.forEach((cube) => {
        cube.material.map = yellowTexture;
      });
    },
    red: () => {
      cubes.forEach((cube) => {
        cube.material.map = redTexture;
      });
    },
  };

  folder.add(parameters, "green").name("green");
  folder.add(parameters, "pink").name("pink");
  folder.add(parameters, "yellow").name("yellow");
  folder.add(parameters, "red").name("red");
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

  createTexturesGUI(cubes, gui);

  createAxeHelperGUI(axesHelper, gui);
};
