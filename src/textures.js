import * as THREE from "three";
import { textureLoader } from "./texture-loader";
import { getValueFromArrayInfinity } from "./utils";

const applyFilterOnTexture = (texture) => {
  texture.generateMipmaps = false;
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
};

export const blueTexture = textureLoader.load(
  "/textures/blue.png",
  () => {
    console.log("textureLoader: loading finished");
  },
  () => {
    console.log("textureLoader: loading progressing");
  },
  () => {
    console.log("textureLoader: loading error");
  }
);

applyFilterOnTexture(blueTexture);

export const greenTexture = textureLoader.load(
  "/textures/green.png",
  () => {
    console.log("textureLoader greenTexture: loading finished");
  },
  () => {
    console.log("textureLoader greenTexture: loading progressing");
  },
  () => {
    console.log("textureLoader greenTexture: loading error");
  }
);

applyFilterOnTexture(greenTexture);

export const redTexture = textureLoader.load(
  "/textures/red.png",
  () => {
    console.log("textureLoader redTexture: loading finished");
  },
  () => {
    console.log("textureLoader redTexture: loading progressing");
  },
  () => {
    console.log("textureLoader redTexture: loading error");
  }
);

applyFilterOnTexture(redTexture);

export const pinkTexture = textureLoader.load(
  "/textures/pink.png",
  () => {
    console.log("textureLoader pinkTexture: loading finished");
  },
  () => {
    console.log("textureLoader pinkTexture: loading progressing");
  },
  () => {
    console.log("textureLoader pinkTexture: loading error");
  }
);

applyFilterOnTexture(pinkTexture);

export const yellowTexture = textureLoader.load(
  "/textures/yellow.png",
  () => {
    console.log("textureLoader yellowTexture: loading finished");
  },
  () => {
    console.log("textureLoader yellowTexture: loading progressing");
  },
  () => {
    console.log("textureLoader yellowTexture: loading error");
  }
);

applyFilterOnTexture(yellowTexture);

export const textureApplyOrder = [
  greenTexture,
  pinkTexture,
  yellowTexture,
  redTexture,
];

const getValue = getValueFromArrayInfinity(textureApplyOrder);
export const getCurrentTexture = () => {
  return getValue();
};

export const updateCurrentTexture = (cubes) => {
  const texture = getCurrentTexture();
  cubes.forEach((cube) => {
    cube.material.map = texture;
  });
};
