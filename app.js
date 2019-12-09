//    console.log(Number(Produkt)+Produkt*Moms); //Number för att fixa till siffror istället för string.
// document.querySelector("div").innerHTML = +Produkt+Produkt*Moms;



//inkomstTotal.appendChild(skapaLi.textContent = "Det här är från JS");


// Räknaknappen
const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", addToLists);

// Funktioner

function addToLists() {
    const skapaLi = document.createElement("li");               // Skapar ett <li> - element.
    const inkomstList = document.querySelector(".inkomstList"); 
    const kostnadList = document.querySelector(".kostnadList");
    const formName = document.querySelector("#name").value;
    const formValue = document.querySelector("#value").value;   // Selectar 
    const selectorValue = document.querySelector("#selector").selectedIndex;
    const inkomstTotal = document.querySelector(".inkomstTotal");
    const inkomstTotalValue = document.querySelector(".inkomstTotal").innerHTML; // Det som är inuti inkomstTotal-div
    const kostnadTotal = document.querySelector(".kostnadTotal");
    const kostnadTotalValue = document.querySelector(".kostnadTotal").innerHTML;
    const totalDiv = document.querySelector(".vinst");

    if(selectorValue === 0){ 
        inkomstList.appendChild(skapaLi);
        skapaLi.textContent = `${formName} ${formValue}:-`;
        inkomstTotal.innerHTML = ((Number(inkomstTotalValue)) + (Number(formValue)));

    } else {
        kostnadList.appendChild(skapaLi);
        skapaLi.textContent = `${formName} ${formValue}:-`;
        kostnadTotal.innerHTML = (Number(kostnadTotalValue)) + (Number(formValue));

    }


    // Räkna ut vinst

    return totalDiv.innerHTML = inkomstTotal.innerHTML - kostnadTotal.innerHTML + "kr";
}
