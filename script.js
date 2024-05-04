// promise chain use kore fetch korlam

const URL= "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#fact");
let button = document.querySelector("#btn");

function getFacts() {
    fetch (URL)
    .then ((response)=>{
        return response.json();
    })

    .then((data)=>{
        console.log(data);
        factPara.innerText = data [3].text;
    })
}
button.addEventListener("click", getFacts);


// etay bojha jay, but code gula vejal, amra ejonno promise chain use korbo na
