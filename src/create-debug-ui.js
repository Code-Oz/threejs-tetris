import * as THREE from "three";
import { isHrefExist } from "./url-parser";
import { createGUI } from "./create-gui";

const URL_FLAG_DEBUG = "debug";

const isDebug = isHrefExist(URL_FLAG_DEBUG);

export const createDebugGUI = (cubes, timeline, scene) => {
  if (!isDebug) {
    return;
  }

  const axesHelper = new THREE.AxesHelper(2);
  scene.add(axesHelper);

  createGUI(cubes, timeline, axesHelper);
};
