const result = document.getElementById("para");
console.log(result);
result.innerHTML="Hello World";
//document.write(result);
result.title = "myname";
//result.innerText="Hello World!"; don't recognise tags inside string
const x = document.getElementsByClassName("p1");
console.log(x);
x[0].innerHTML="cse";
x[1].innerHTML="11";
x[2].innerHTML="js";

const res=document.getElementsByTagName("p");
res[2].innerHTML="<b>this is a pet</b>";
res[1].style.color="blue";
res[1].innerText="<b>my paragraph</b>";

//query selector
// const res1=document.querySelector("ul li:nth-child(3)");
// res1.style.backgroundColor = "green";
// res1.style.padding = "10px";
// res1.style.margin="20px";

//query selector All
const res2 = document.querySelectorAll("ul li");
for (x in res2 ) {
    res2[x].style.backgroundColor = "green";
    res2[x].style.margin = "10px";
    res2[x].style.color = "blue";
}