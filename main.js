let heading = document.querySelector("h1");
let auther = document.querySelector("p");
let button = document.querySelector("button");
console.log(button);




const fatchQuote =  async () => {
   
    const url = await fetch("GET  https://quotes.rest/");
    const data = await url.json();
    console.log(data);

    heading.innerText = data.content;
    auther.innerText = data.author;
};

button.addEventListener("click", fatchQuote);
