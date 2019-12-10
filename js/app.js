// test ta fram containers
const inkomstBox = document.querySelector(".incomelist")
const utgiftBox = document.querySelector(".expenselist")
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
      inkomstBox.style.display = "flex";
      inkomst__list.appendChild(skapaLi);
      skapaLi.setAttribute("class", "inkomst__li");
      skapaLi.innerHTML = `${formName} <span class="inkomst__li-price">${formValue}</span> ${createRemoveIcon}`;

      for (let i = 0; i < removeListIcon.length; i++)
        removeListIcon[i].addEventListener("click", function() {
          this.parentElement.remove();
        });
     
    } else if (radioValue[1].checked) {
      utgiftBox.style.display = "flex";
      utgifter__list.appendChild(skapaLi);
      skapaLi.setAttribute("class", "utgift__li");
      skapaLi.innerHTML = `${formName} <span class="utgifter__li-price">${formValue}</span> ${createRemoveIcon}`;

      for (let i = 0; i < removeListIcon.length; i++)
        removeListIcon[i].addEventListener("click", function() {
          this.parentElement.remove();
        });

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

let inSpanSum = 0;
let outSpanSum = 0;



//Total summa inkomst

inkomst__list.addEventListener("DOMSubtreeModified", updateIncome);

function updateIncome() {
  const allInkomstSpan = document.querySelectorAll(".inkomst__li-price");
  inSpanSum = 0;
  for (let i = 0; i < allInkomstSpan.length; i++) {
    inSpanSum += Number(allInkomstSpan[i].innerHTML);
  }

  inkomstTotal.innerHTML = `${Number(inSpanSum)} kr`;
  vinstTotal.innerHTML = `${inSpanSum - outSpanSum} kr`;
}

// Totalsumma utgifter

utgift__list.addEventListener("DOMSubtreeModified", updateOut);

function updateOut() {
  const allUtgiftSpan = document.querySelectorAll(".utgifter__li-price");
  outSpanSum = 0;
  for (let i = 0; i < allUtgiftSpan.length; i++) {
    outSpanSum += Number(allUtgiftSpan[i].innerHTML);
  }

  utgiftTotal.innerHTML = `${Number(outSpanSum)} kr`;
  vinstTotal.innerHTML = `${inSpanSum - outSpanSum} kr`;
}

vinstTotal.addEventListener("DOMSubtreeModified", function(){
  const vinstcontainer = document.querySelector(".vinst-container");
  vinstcontainer.style.display = "block";
});


