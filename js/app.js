// test ta bort LI
const listtest = document.getElementsByClassName("listtest"); // Skapar ett <li> - element.

// bubblor!
const helpBubble = document.querySelector(".helpbubble");
const warningBubble = document.querySelector(".warningbubble");
const removeIcon = document.querySelectorAll(".removeIcon");
const removeListIcon = document.getElementsByClassName("removelisticon");
const helpIcon = document.querySelector(".helpIcon");
const warningText = document.querySelector(".warningtext");

// Create icons
const createRemoveIcon = '<i class="removelisticon far fa-times-circle"></i>';

// Tar bort bubbla
for (let i = 0; i < removeIcon.length; i++)
  removeIcon[i].addEventListener("click", function() {
    this.parentElement.remove();
  });
// Tar bort grej i listan:

// Tar fram bubbla
helpIcon.addEventListener("click", function() {
  helpBubble.style.display = "inline-block";
});

// Felmeddelanden:

let needFormInput = `Hoppsan hejsan! <br>Du behöver fylla i samtliga fält ;)`;
let needSelectorInput = `Oj oj! <br> Du glömde klicka på plus eller minus-tecknet! :)`;

// Räknaknappen
const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", addToLists);

// Funktioner

function addToLists() {
  const skapaLi = document.createElement("li"); // Skapar ett <li> - element.
  const inkomst__list = document.querySelector(".inkomst__li-container");
  const utgifter__list = document.querySelector(".utgifter__li-container");
  const formName = document.querySelector("#name").value;
  const formValue = document.querySelector("#value").value; // Selectar
  const radioValue = document.querySelectorAll(".radio__input");
  const inkomstTotal = document.querySelector(".inkomst__total");
  const inkomstTotalValue = document.querySelector(".inkomst__total").innerHTML; // Det som är inuti inkomstTotal-div
  const utgifterTotal = document.querySelector(".utgifter__total");
  const utgifterTotalValue = document.querySelector(".utgifter__total")
    .innerHTML;
  const totalDiv = document.querySelector(".vinst");

  // Stäng varningsmeddelanden om de är uppe:
  warningBubble.style.display = "none";

  if (formName !== "" && formValue !== "") {
    if (radioValue[0].checked) {
      inkomst__list.appendChild(skapaLi);
      skapaLi.setAttribute("class", "inkomst__li");
      skapaLi.innerHTML = `${formName} <span class="inkomst__li-price">${formValue}</span> ${createRemoveIcon}`;

      for (let i = 0; i < removeListIcon.length; i++)
        removeListIcon[i].addEventListener("click", function() {
          this.parentElement.remove();
        });
      //   inkomstTotal.innerHTML = Number(inkomstTotalValue) + Number(formValue);

      //   return (totalDiv.innerHTML =
      //     inkomstTotal.innerHTML - utgifterTotal.innerHTML + "kr");
    } else if (radioValue[1].checked) {
      utgifter__list.appendChild(skapaLi);
      skapaLi.setAttribute("class", "utgift__li");
      skapaLi.innerHTML = `${formName} <span class="utgifter__li-price">${formValue}</span> ${createRemoveIcon}`;
      //   utgifterTotal.innerHTML = Number(utgifterTotalValue) + Number(formValue);

      for (let i = 0; i < removeListIcon.length; i++)
        removeListIcon[i].addEventListener("click", function() {
          this.parentElement.remove();
        });

      //   return (totalDiv.innerHTML =
      //     inkomstTotal.innerHTML - utgifterTotal.innerHTML + "kr");
    } else {
      // Om man inte valt värde i radio-input. (plus eller minus);
      console.log("välj selector");
      warningBubble.style.display = "inline-block";
      warningText.innerHTML = needSelectorInput;
    }
  } else {
    // Om fälten ej är ifyllda.
    console.log("fyll i fält");
    warningBubble.style.display = "inline-block";
    warningText.innerHTML = needFormInput;
  }
}

//  RÄKNA UT TOTAL
const vinstTotal = document.querySelector(".vinst");
const inkomst__list = document.querySelector(".inkomst__li-container");
const utgift__list = document.querySelector(".utgifter__li-container");
const inkomstTotal = document.querySelector(".inkomst__total");
const utgiftTotal = document.querySelector(".utgifter__total");


//Total summa inkomst

inkomst__list.addEventListener("DOMSubtreeModified", updateIncome);

function updateIncome() {
  let spanSum = 0;
  const allInkomstSpan = document.querySelectorAll(".inkomst__li-price");

  for (let i = 0; i < allInkomstSpan.length; i++) {
    spanSum += Number(allInkomstSpan[i].innerHTML);
  }

  inkomstTotal.innerHTML = Number(spanSum);
  vinstTotal.innerHTML = inkomstTotal.innerHTML - utgiftTotal.innerHTML;

}

// Totalsumma utgifter

utgift__list.addEventListener("DOMSubtreeModified", updateOut);

function updateOut() {
  let spanSum = 0;
  const allUtgiftSpan = document.querySelectorAll(".utgifter__li-price");

  for (let i = 0; i < allUtgiftSpan.length; i++) {
    spanSum += Number(allUtgiftSpan[i].innerHTML);
  }

  utgiftTotal.innerHTML = Number(spanSum);
  vinstTotal.innerHTML = inkomstTotal.innerHTML - utgiftTotal.innerHTML;
}


