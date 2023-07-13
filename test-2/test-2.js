const inputEl = document.querySelector("#num");
const drawTableEl = document.querySelector(".drawing-table");
const btnEl = document.querySelector(".btn");

const numberOneTriangle = (num) => {
  if (num >= 1 && num <= 10) {
    for (let i = 1; i <= num; i++) {
      let j = i;
      let array = [];
      while (j > 0) {
        array.push("*");
        j--;
      }
      let drawTriangle = array.join("");
      let node = document.createElement("p");
      node.innerText = drawTriangle;
      console.log(drawTriangle);
      drawTableEl.appendChild(node);
    }
  } else {
    alert("invalid input!");
  }
};

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

btnEl.addEventListener("click", () => {
  console.clear();
  removeAllChildNodes(drawTableEl);
  let inputNum = inputEl.value;
  numberOneTriangle(inputNum);
});
