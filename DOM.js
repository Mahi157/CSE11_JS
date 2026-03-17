// // const result = document.getElementById("para");
// // console.log(result);
// // result.innerHTML="Hello World";
// // //document.write(result);
// // result.title = "myname";
// // //result.innerText="Hello World!"; don't recognise tags inside string
// // const x = document.getElementsByClassName("p1");
// // console.log(x);
// // x[0].innerHTML="cse";
// // x[1].innerHTML="11";
// // x[2].innerHTML="js";

// // const res=document.getElementsByTagName("p");
// // res[2].innerHTML="<b>this is a pet</b>";
// // res[1].style.color="blue";
// // res[1].innerText="<b>my paragraph</b>";

// // //query selector
// // // const res1=document.querySelector("ul li:nth-child(3)");
// // // res1.style.backgroundColor = "green";
// // // res1.style.padding = "10px";
// // // res1.style.margin="20px";

// // //query selector All
// // const res2 = document.querySelectorAll("ul li");
// // for (x in res2 ) {
// //     res2[x].style.backgroundColor = "green";
// //     res2[x].style.margin = "10px";
// //     res2[x].style.color = "blue";
// // }
// // //i
// // const element = document.getElementById("myId");
// // let text = element.getAttribute("class");
// // document.getElementById("demo").innerHTML = text;

// // functia
// //  myFunction() {
// //     document.getElementById("myH1").setAttribute("class","democlass");
// //     alert("Attribute added successfully");
// // }
// // //  let element = getElementById("demo");
// // //  element.style.color="blue";

// function onClick() {
//     console.log("clicked");

// }

// function onMouseOver() {
//     console.log("on Mouse Over");

// }

// function onMouseOut() {
//     console.log("on Mouse Out");

// }

// function onMouseUp() {
//     console.log("on Mouse Up");

// }
// function onMouseDown() {
//     console.log("on Mouse Down");

// }
// function onMouseMove() {
//     console.log("on Mouse Move");

// }

 var text ='{"employees":['+'{"firstName":"John","lastName":"Doe"},'
 +'{"firstName":"Anna","lastName":"Smith"},'+'{"firstName":"Peter","lastName":"Jones"}]}';

 obj=JSON.parse(text);
 document.getElementById("demo").innerHTML=obj.employees[1].firstName+"" +obj.employees[1].lastName;



// const x= document.querySelector('input');
//  x.addEventListener('focus',onhandlefocus);
//  x.addEventListener('blur',onhandleblur);

//  function onLoad() {
//     alert("Window Loaded Successfully");
//  }
