const root = document.querySelector("root");

function createCard1() {
  const card = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.innerText = "Reset";

  input.addEventListener("input", () => {
    const input0 = document.querySelector("#card-0 input");
    console.log(Number(input0.value));
  });
  button.addEventListener("click", () => {
    input.value = "";
  });
  card.className = "card";
  card.id = "card-1";
  card.append(input, button);
  root.append(card);
}

function createCard2() {
  const card = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.innerText = "Reset";

  input.addEventListener("input", () => {
    const sum = [
      document.querySelector("#card-1 input").value,
      document.querySelector("#card-2 input").value,
    ]
      .map(Number)
      .reduce((curr, acc) => acc + curr);

    console.log(sum);
  });
  button.addEventListener("click", () => {
    input.value = "";
  });
  card.className = "card";
  card.id = "card-2";
  card.append(input, button);
  root.append(card);
}

function createCard3() {
  const card = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.innerText = "Reset";

  input.addEventListener("input", () => {
    const sum = [
      document.querySelector("#card-1 input").value,
      document.querySelector("#card-2 input").value,
      document.querySelector("#card-3 input").value,
    ]
      .map(Number)
      .reduce((curr, acc) => acc + curr);

    console.log(sum);
  });
  button.addEventListener("click", () => {
    input.value = "";
  });
  card.className = "card";
  card.id = "card-3";
  card.append(input, button);
  root.append(card);
}
function createCard4() {
  const card = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.innerText = "Reset";
  input.addEventListener("input", () => {
    const sum = [
      document.querySelector("#card-1 input").value,
      document.querySelector("#card-2 input").value,
      document.querySelector("#card-3 input").value,
      document.querySelector("#card-4 input").value,
    ]
      .map(Number)
      .reduce((curr, acc) => acc + curr);

    console.log(sum);
  });
  button.addEventListener("click", () => {
    input.value = "";
  });
  card.className = "card";
  card.id = "card-4";
  card.append(input, button);
  root.append(card);
}

createCard1();
createCard2();
createCard3();
createCard4();
