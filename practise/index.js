"use script"

let heading1 = document.getElementById("heading")
let middle = document.getElementById("pls");
let head = document.getElementById("heading2")
let btn = document.getElementById("chexhbtn")
let input = document.getElementById("inp")

let ramnum = Math.floor(Math.random()* 100 + 1);
let ramnum1 = Math.floor(Math.random()* 100 + 1);

heading1.textContent=ramnum;
head.textContent=ramnum1;

let sum =""
if(ramnum1==1){
  sum
}
chexhbtn.addEventListener("click", function(){
 let test = ramnum+ramnum1;
 if(test==input.value){
  alert("Your answer correct Right")
 }else{
  alert(" Your answer incorrect False")
 }
})



