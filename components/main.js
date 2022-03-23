const button = document.querySelector("#button");
const textarea = document.querySelector("#review");
const form = document.querySelector("#form");
const quotes = document.querySelector(".quotes");

async function gautiDuomenis(){
    try {
        let response = await fetch("http://localhost:3000/reviews");
        let result = await response.json();
        console.log(result);
        return result;
    }
    catch(error){
        console.log(error);
    }
}

async function render(){
    let duomenys = await gautiDuomenis();
    for(let i = 0; i < duomenys.length; i++){
        const div = document.createElement("div");
        div.innerHTML = duomenys[i].reviewText;
        div.className = ("qt1");
        quotes.appendChild(div);
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let reviewText = textarea.value;
    let response = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            clientName: "John Doe", 
            reviewText, 
            rewievRating: 5
        })
    });
    //let result = await response.json();
    console.log(response);

})





render();



