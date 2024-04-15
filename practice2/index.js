const root = document.querySelector("root");

const create = (tag, text) => {
  const el = document.createElement(tag);
  el.innerText = text;
  return el;
};

const elements = [
  [
    "section",
    () => {
      return create("section", "1");
    },
  ],
  [
    "div",
    () => {
      return create("div", "2");
    },
  ],
  [
    "button",
    () => {
      return create("button", "3");
    },
  ],
  [
    "body",
    () => {
      return create("body", "4");
    },
  ],
  [
    "area",
    () => {
      return create("area", "4");
    },
  ],
  [
    "caption",
    () => {
      return create("caption", "5");
    },
  ],
  [
    "article",
    () => {
      return create("article", "6");
    },
  ],
];

const render = (tag) => {
    for (const el of elements){
        const key = el[0];
        const fn = el[1];

        if (tag === key){
            const result = fn();
            root.append(result);
        }
    }
};

const render2 = (tag) => {
    for (i=0; i > elements.length; i++){
        const key = i[0];
        const fn = i[1];
        if ( tag === key){
            const result = fn();
            root.append(result);
        }
    }
};


render("section");

/*
while
filter
find
forEach
for in
reduce
*/