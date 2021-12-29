import { compare } from "./node_modules/@proxtx/compare/main.js";

const rebuildVis = (start, compared) => {
  let resElem = document.getElementById("result");
  resElem.innerHTML = "";
  for (let i in compared) {
    if (typeof compared[i] == "string") {
      resElem.innerHTML += compared[i];
    } else {
      resElem.innerHTML +=
        '<a style="background-color: green;">' +
        start.substring(compared[i].s, compared[i].e) +
        "</a>";
    }
  }
};

const update = () => {
  rebuildVis(
    document.getElementById("input1").value,
    compare(
      document.getElementById("input1").value,
      document.getElementById("input2").value
    )
  );
};

document.getElementById("update").addEventListener("click", update);
document.getElementById("input1").addEventListener("change", update);
document.getElementById("input2").addEventListener("change", update);
