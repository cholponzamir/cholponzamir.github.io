//add an event listener of type 'mouseover' event 
//to the btnGetMessage button 
//that would change the content of the paragraphId2 (innerHTML) to the content of paragraphId1
//plus your name (e.g. "Midterm submission for Bill Farmer")?


const btn = document.querySelector("button");

btn.addEventListener("mouseover", b);

function b() {
    const m = document.getElementById("paragraphId1").textContent;
    //const a = document.getElementById("paragraphId2");
    const a=document.getElementById("paragraphId1").innerHTML = m+"lala";
    //a.innerHTML += "Cholpon's midterm submission";

}