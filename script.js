
// document.querySelector("h1").innerText = "Bhupesh kumawat"

// const h1 = document.querySelector("h1");
// h1.style.color = "green";
// h1.style.fontSize = '50px';
// h1.style.border = "2px solid red";
// h1.style.backgroundColor = "yellow";


// const h1 = document.querySelector("h1");
// h1.classList.add("purple");
// h1.classList.add("border");
// h1.classList.remove("border")


// const newImg = document.createElement("img");
// newImg.src ="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
// document.body.appendChild(newImg);

// const btn = document.querySelector("#v2");

// btn.onclick = function (){
//     console.log("YOU CLICKED ME");
//     console.log("I HOPE IT WORKED");
// }


// function scream(){
//     console.log("AAAAAAAH");
//     console.log("STOP TOUCHING ME!");
// }

// btn.onmouseenter = scream;

// // document.querySelector("h1").onclick = function (){
// //     alert("Stop clicking me")
// // }

// const heading = document.querySelector("h1");
// heading.addEventListener("click", () => {
//     alert("stop clicking me")
// })

// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// button.addEventListener("click", function(){
//    const r = Math.floor(Math.random() * 255);
//    const g = Math.floor(Math.random() * 255);
//    const b = Math.floor(Math.random() * 255);
//    const newColor = `rgb(${r}, ${g}, ${b})`;
//    document.body.style.backgroundColor = newColor;
//    h1.innerText = newColor;
// }) 


const button = document.querySelector("button");
const heading = document.querySelector("h1");
button.addEventListener("click", function(){
   const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);
   const newColor = `rgb(${r},${g},${b})`;
   document.body.style.backgroundColor = newColor;
   heading.innerText = newColor;
})
