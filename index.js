// let arr = [];
// let displayText = () => {
//   let txt1 = document.getElementById("txt1");
//   console.log(txt1.value);
//   arr.push(txt1.value);
//   txt1.value = "";
//   txt1.placeholder = "setted by js";
//   txt1.maxLength = 10;
// };

// let getSelectData = () => {
//   let dd01 = document.getElementById("dd01");
//   console.log(dd01.value);
//   let dd02 = document.getElementById("dd02");
//   console.log(dd02.value);
// };

// let dataArr = [
//   { name: "Vivek Kumar", age: 24 },
//   { name: "Sarthak sharma", age: 22 },
//   { name: "Pranav Gupta", age: 26 },
//   { name: "Sunil modi", age: 44 },
// ];

// let showSelect = () => {
//   let dd03 = document.getElementById("dd03");
//   let data = showDataFunction(dataArr, "Select The Options", "Vivek kumar");
//   dd03.innerHTML = data;
// };
// let showDataFunction = (arr, valOnTop, preVal) => {
//   // let header = `<select></select>`;
//   let options = arr.map((elem) => {
//     if (elem.name == preVal) {
//       return (str = `<option selected >${elem.name} </option>`);
//     } else {
//       return (str = `<option>${elem.name} </option>`);
//     }
//   });
//   let firstOption = "";
//   if (preVal == "") {
//     firstOption = `<option selected disabled>${valOnTop}</option>`;
//   } else {
//     firstOption = `<option disabled>${valOnTop}</option>`;
//   }
//   console.log(options);
//   return `<select>${firstOption}${options.join(" ")}</select>`;
// };

// let ch = document.getElementById("ch");
// ch.addEventListener("click", () => {
//   let dd03 = document.getElementById("dd03");
// });

// second here

let arr = ["React js", "Node js", "Angular js", "Next.js", "Three.js"];
// let data = {};
// let showData = document.getElementById("showData");
// showData.addEventListener("click",()=>{
//     let name = `Name : <input type = "text" id="name"> </br>`;
//     let age = `Age: <input type = "text" id="age"> </br>`;
//     let btn = `<button onClick = "submit()">SUBMIT</button>`;
//     let dd = makeDdFunction(arr,"SELECT THE LANGUAGE");
//     let show = document.getElementById("show");
//     show.innerHTML = `${name} ${age} ${dd} ${btn}`;

// });

// let makeDdFunction=(arr,valOnTop)=>{
//     let topStr = `<option selected disabled>${valOnTop}</option>`;
//     let optionsData = arr.map((elem)=>{
//         return  `<option>${elem}</option>`;
//     });
//     let final = `<select id = "course">${topStr} ${optionsData.join("")}</select>`;
//     return final;
// };

// let submit = ()=>{
//     let name = document.getElementById("name");
//     let age = document.getElementById("age");
//     let course = document.getElementById("course");
//     data.name = name.value;
//     data.age = age.value;
//     data.course = course.value;
//     let disp = document.getElementById("disp");
//     disp.innerHTML = `<h2>Name : ${data.name} Age : ${data.age} Course : ${data.course}</h2>`;
//     name.value = "";
//     age.value = "";
//     course.value = "SELECT THE LANGUAGE";
// }
let showData = document.getElementById("showData");
showData.addEventListener("click", () => {
  let nameInput = `<input type = "text" id="name" placeholder = "Enter the name" > </b>`;
  let ageInput = `<input type = "text" id = "age" placeholder = "Enter the age"> </b>`;
  let btn = `<button id="optionBtn" onClick ="sayHi()" >SELECT</button> </b>`;
  let ddData = ddDataFunction(arr, "SELECT THE OPTIONS");
  let disp = document.getElementById("disp");
  let finalDD = `${nameInput} ${ageInput} ${ddData} ${btn}`;

  disp.innerHTML = finalDD;
});

let ddDataFunction = (arr, valOnTop, selectedElem) => {
  let ddData = arr.map((elem) => {
    if (elem == selectedElem) {
      return `<option selected >${elem}</option>`;
    } else {
      return `<option>${elem}</option>`;
    }
  });
  let topStr = "";
  if (selectedElem !== "") {
    topStr = `<option disabled>SELECT THE OPTION</option>`;
  } else {
    topStr = `<option selected disabled>SELECT THE OPTION</option>`;
  }
  let dd = `<select id = "courseData">${topStr} ${ddData.join("")}</select>`;
  return dd;
};
let dataJson = {};
let dataArr = [];
let sayHi = () => {
  let name = document.getElementById("name");
  let age = document.getElementById("age");
  let course = document.getElementById("courseData");

  dataJson.name = name.value;
  dataJson.age = age.value;
  dataJson.course = course.value;
  let show = document.getElementById("show");
  show.innerHTML = `<h2>Name : ${dataJson.name} age : ${dataJson.age} course : ${dataJson.course}</h2> </br> <button onClick ="edit()">EDIT</button>`;
  dataArr.push(
    `Name : ${dataJson.name} age : ${dataJson.age} ${dataJson.course}`
  );
  name.value = "";
  age.value = "";
  course.value = "SELECT THE OPTION";
  console.log(dataArr);
};

let edit = () => {
  let nameInput = `<input type = "text" id="name" placeholder = "Enter the name" value = "${dataJson.name}" > </b>`;
  let ageInput = `<input type = "text" id = "age" placeholder = "Enter the age" value = "${dataJson.age}"> </b>`;
  let btn = `<button id="optionBtn" onClick ="sayHi()" >SELECT</button> </b>`;
  let ddData = ddDataFunction(arr, "SELECT THE OPTIONS", dataJson.course);
  let disp = document.getElementById("disp");
  let finalDD = `${nameInput} ${ageInput} ${ddData} ${btn}`;

  disp.innerHTML = finalDD;
};
// let optionBtn= document.getElementById("optionBtn");
// optionBtn.addEventListener("click",()=>{
//     alert("hi")
// })
