// promise chain use kore fetch korlam

// const URL= "https://cat-fact.herokuapp.com/facts";
// let factPara = document.querySelector("#fact");
// let button = document.querySelector("#btn");

// function getFacts() {
//     fetch (URL)
//     .then ((response)=>{
//         return response.json();
//     })

//     .then((data)=>{
//         console.log(data);
//         factPara.innerText = data [3].text;
//     })
// }
// button.addEventListener("click", getFacts);


// // etay bojha jay, but code gula vejal, amra ejonno promise chain use korbo na



//async use kore fetch korlam...,ekta portion ora korse, baigula ami korsi as excercise

const URL= "https://cat-fact.herokuapp.com/facts";

let factPara0 = document.querySelector("#fact0");
let button0 = document.querySelector("#btn0");

let factPara1 = document.querySelector("#fact1");
let button1 = document.querySelector("#btn1");

let factPara2 = document.querySelector("#fact2");
let button2 = document.querySelector("#btn2");

let factPara3 = document.querySelector("#fact3");
let button3 = document.querySelector("#btn3");

let factPara4 = document.querySelector("#fact4");
let button4 = document.querySelector("#btn4");


const getFacts0 = async ()=>{
    console.log("getting data 0....");
    let response0 = await fetch (URL);
    console.log(response0);
    let data0 = await response0.json();
    console.log(data0);
    factPara0.innerText = data0[0].text;
}


const getFacts1= async () =>{
    console.log("getting data 1...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    //console.log(data[0].text); // console a dekhar jonne
    factPara1.innerText = data [1].text;
     
}

const getFacts2= async () =>{
     console.log("getting data2....");
     let response2 = await fetch (URL);
     console.log(response2);
     let data2 = await response2.json();
     console.log(data2);
     factPara2.innerText = data2[2].text;
}

const getFacts3 = async ()=> {
    console.log("getting data3....");
    let response3 = await fetch(URL);
    console.log(response3);
    let data3 = await response3.json();
    console.log(data3);
    factPara3.innerText = data3[3].text;
}


const getFacts4 = async ()=>{
    console.log("gettting data 4........");
    let response4 = await fetch (URL);
    console.log(response4);
    let data4 = await response4.json();
    console.log(data4);
    factPara4.innerText = data4[4].text;
}


button0.addEventListener("click", getFacts0);
button1.addEventListener("click", getFacts1);
button2.addEventListener("click", getFacts2);
button3.addEventListener("click", getFacts3);
button4.addEventListener("click", getFacts4);
