
function unitConvertor() {
  let numInput = +document.getElementById("inputData").value;
  let selectTag1 = document.getElementById("input-value").value;
  let selectTag2 = document.getElementById("output-value").value;
  let output = document.getElementById("convert-value");
  output.innerHTML = ``;


  // centimeter:--

  if (selectTag1 === "centimeter" && selectTag2 === "meter") {

    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput / 100} ${selectTag2}</div>`
  } else if (selectTag1 === "centimeter" && selectTag2 === "inch") {
    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput / 2.54} ${selectTag2}</div>`
  }
  else if (selectTag1 === "centimeter" && selectTag2 === "feet") {
    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput / 30.48} ${selectTag2}</div>`
  }

  //Meter:--

  else if (selectTag1 === "meter" && selectTag2 === "centimeter") {
    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput * 100} ${selectTag2}</div>`
  } else if (selectTag1 === "meter" && selectTag2 === "inch") {
    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput * 39.37} ${selectTag2}</div>`
  } else if (selectTag1 === "meter" && selectTag2 === "feet") {
    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput * 3.281} ${selectTag2}</div>`
  }

  // inch:--
  else if (selectTag1 === "inch" && selectTag2 === "centimeter") {
    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput * 2.54} ${selectTag2}</div>`
  } else if (selectTag1 === "inch" && selectTag2 === "meter") {
    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput * 0.0254} ${selectTag2}</div>`
  } else if (selectTag1 === "inch" && selectTag2 === "feet") {
    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput / 12} ${selectTag2}</div>`
  }
  //feet:--
  else if (selectTag1 === "feet" && selectTag2 === "centimeter") {
    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput * 30.48} ${selectTag2}</div>`
  } else if (selectTag1 === "feet" && selectTag2 === "meter") {
    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput * 0.3048} ${selectTag2}</div>`
  } else if (selectTag1 === "feet" && selectTag2 === "inch") {
    output.innerHTML += `<div>${numInput}${selectTag1}=${numInput * 12} ${selectTag2}</div>`
  }
}

