// get neighbor countries and find max value by area
function getNeighborWithLargestArea() {
  const areaDiv = document.querySelector("#country_area");
  const currentCountry = selectedCountry[selectedCountry.length - 1];
  let neighbors;
  let innerText = "";

  if (currentCountry.borders) {
    neighbors = currentCountry.borders.map(getCountryByCca3);
    const maxValue = neighbors.reduce((max, country) => {
      return country.area > max.area ? country : max;
    });

    innerText = `The largest country next to ${
      currentCountry.name.common
    } in terms of land area is ${maxValue.name.common} with ${
      Math.round(maxValue.area / 10000) / 100
    } million km²
    `;
  } else {
    innerText = `${currentCountry.name.common} has no land neighbors
    `;
  }

  areaDiv.innerHTML = "";
  createNode(
    "p",
    {
      className: "area",
      innerText: innerText,
    },
    areaDiv
  );
}

function createNode(tagName, attributes = {}, parentNode = "") {
  const el = document.createElement(tagName);

  for (const key of Object.keys(attributes)) {
    el[key] = attributes[key];
  }
  if (parentNode === "") {
    return el;
  }
  parentNode.append(el);
  return null;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

let moves = [];
let fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];

describe("Testing...", function () {
  it("should work with few moves", function () {
    moves = ["up", "left", "right", "left", "left"];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "Ryu",
      "Vega",
      "Ryu",
      "Vega",
      "Balrog",
    ]);
  });

  it("should work with no selection cursor moves", function () {
    moves = [];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), []);
  });

  it("should work when always moving left", function () {
    moves = ["left", "left", "left", "left", "left", "left", "left", "left"];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "Vega",
      "Balrog",
      "Guile",
      "Blanka",
      "E.Honda",
      "Ryu",
      "Vega",
      "Balrog",
    ]);
  });

  it("should work when always moving right", function () {
    moves = [
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
      "right",
    ];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "E.Honda",
      "Blanka",
      "Guile",
      "Balrog",
      "Vega",
      "Ryu",
      "E.Honda",
      "Blanka",
    ]);
  });

  it("should use all 4 directions clockwise twice", function () {
    moves = ["up", "left", "down", "right", "up", "left", "down", "right"];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "Ryu",
      "Vega",
      "M.Bison",
      "Ken",
      "Ryu",
      "Vega",
      "M.Bison",
      "Ken",
    ]);
  });

  it("should work when always moving down", function () {
    moves = ["down", "down", "down", "down"];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "Ken",
      "Ken",
      "Ken",
      "Ken",
    ]);
  });

  it("should work when always moving up", function () {
    moves = ["up", "up", "up", "up"];
    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      "Ryu",
      "Ryu",
      "Ryu",
      "Ryu",
    ]);
  });
});

function streetFighterSelection(fighters, position, moves) {
  var result = [];

  moves.forEach(function (move) {
    if (move === "up") {
      position[0] = 0;
    } else if (move === "down") {
      position[0] = 1;
    } else if (move === "right") {
      position[1] = position[1] === 5 ? 0 : position[1] + 1;
    } else if (move === "left") {
      position[1] = position[1] === 0 ? 5 : position[1] - 1;
    }

    result.push(fighters[position[0]][position[1]]);
  });

  return result;
}

function streetFighterSelection(fighters, position, moves) {
  let result = [];

  moves.forEach((move) => {
    if (move === "up") {
      position[0] = 0;
    } else if (move === "down") {
      position[0] = 1;
    } else if (move === "left") {
      position[1] = (position[1] - 1) % 6;
    } else if (move === "right") {
      position[1] = (position[1] + 1) % 6;
    }
    result.push(fighters[position[0]][position[1]]);
  });
  return result;
}
