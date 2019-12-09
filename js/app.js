

// Räknaknappen
const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", addToLists);

// Funktioner

function addToLists() {
    const skapaLi = document.createElement("li");               // Skapar ett <li> - element.
    const inkomst__list = document.querySelector(".inkomst__list"); 
    const utgifter__list = document.querySelector(".utgifter__list");
    const formName = document.querySelector("#name").value;
    const formValue = document.querySelector("#value").value;   // Selectar 
    // const selectorValue = document.querySelector("#selector").selectedIndex;
    const radioValue = document.querySelectorAll(".radio__input");
    const inkomst__total = document.querySelector(".inkomst__total");
    const inkomst__totalValue = document.querySelector(".inkomst__total").innerHTML; // Det som är inuti inkomst__total-div
    const utgifter__total = document.querySelector(".utgifter__total");
    const utgifter__totalValue = document.querySelector(".utgifter__total").innerHTML;
    const totalDiv = document.querySelector(".vinst");

    // if(selectorValue === 0){ 
        if(radioValue[0].checked){
        inkomst__list.appendChild(skapaLi);
        skapaLi.textContent = `${formName} ${formValue}:-`;
        inkomst__total.innerHTML = ((Number(inkomst__totalValue)) + (Number(formValue)));

    } else {
        if(!formName === ""){
        utgifter__list.appendChild(skapaLi);
        skapaLi.textContent = `${formName} ${formValue}:-`;
        utgifter__total.innerHTML = (Number(utgifter__totalValue)) + (Number(formValue));
        }
    }


    // Räkna ut vinst

    return totalDiv.innerHTML = inkomst__total.innerHTML - utgifter__total.innerHTML + "kr";
}
