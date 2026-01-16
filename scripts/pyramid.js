const vs = [
  { x: 0, y: 0.7, z: 0 }, // 0 - top
  { x: -0.5, y: -0.5, z: 0.5 }, // 1 - front left
  { x: 0.5, y: -0.5, z: 0.5 }, // 2 - front right
  { x: 0.5, y: -0.5, z: -0.5 }, // 3 - back right
  { x: -0.5, y: -0.5, z: -0.5 }, // 4 - back left
];

const fs = [
  [0, 1, 2], // front face
  [0, 2, 3], // right face
  [0, 3, 4], // back face
  [0, 4, 1], // left face
  [1, 2, 3, 4], // base
];
