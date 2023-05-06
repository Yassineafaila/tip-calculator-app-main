//variables
let Price = document.querySelector("#price");
let NbrPeople = document.querySelector("#people");
let CustomTip = document.querySelector("#Custom");
let chossenTip = document.querySelectorAll(".Tips div button");
let inputPeople = document.querySelector(".People div.x");
let warning = document.querySelector(".warning");
let amount = document.querySelector(".amount");
let total = document.querySelector(".total");
let RESET = document.querySelector(".RESET");

//for the CSS:
Price.addEventListener("click", function () {
    Price.parentElement.style.border = "2px solid hsl(172, 67%, 45%)";
})
NbrPeople.addEventListener("click", function () {
  NbrPeople.parentElement.style.border = "2px solid hsl(172, 67%, 45%)";
});
//This code is for marking the selected tip:
chossenTip.forEach((tip) => {
    tip.addEventListener("click", function () {
        chossenTip.forEach((a) => {
            a.classList.remove("selected");
        });
        tip.classList.add("selected")
        
    })
});
//This code is runing when the click or reset button:
RESET.addEventListener("click", function () {
    checkThePriceAndPeople(Price, NbrPeople);
    let tip;
    chossenTip.forEach((T) => {
        if (T.classList.contains("selected")) {
            tip = T.value;
        }
    })
    
    TipCalculator(Price,NbrPeople,tip,CustomTip)
})
//this function is responsible for checking the inputs that aren't empty:
function checkThePriceAndPeople(price, people) {
    if (price.value === "" || people.value === "") {
        inputPeople.style.border = "2px solid red";
        warning.style.display = "flex"; 
    } else {
        inputPeople.style.border = "";
        warning.style.display = "none"; 
    }
}

//this Function is responsible for calculating the amount and the total price:
function TipCalculator(price, NbrPeople, tip,CustomTip) {
    if (CustomTip.value != "") {
        let amounts = (price.value * CustomTip.value) / 100;
        let totals = amounts * NbrPeople.value;
        amount.textContent = `$${amounts}`;
        total.textContent = `$${totals}`;
    } else {
         let amounts = (price.value * tip) / 100;
         let totals = amounts * NbrPeople.value;

        amount.textContent = `$${amounts}`;
        total.textContent = `$${totals}`;
    }
}