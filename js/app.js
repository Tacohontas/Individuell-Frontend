// Tar bort bubbla (med hjälp av remove-ikon)
const removeIcon = document.querySelectorAll(".icon--remove"); // Remove-ikonen.
for (let i = 0; i < removeIcon.length; i++)
  removeIcon[i].addEventListener("click", function() {
    this.parentElement.style.display = "none";
  });

// Tar fram bubbla (med hjälp av hjälp-ikon)
const helpIcon = document.querySelector(".icon--help"); // Hjälp-ikonen.
helpIcon.addEventListener("click", function() {
  const bubbleHelp = document.querySelector(".bubble--help"); // Hjälp-bubbla
  bubbleHelp.style.display = "inline-block";
});

// Felmeddelande-strings:
let needFormInput = `Hoppsan hejsan! <br>Du behöver fylla i samtliga fält. :)`;
let needSelectorInput = `Oj oj! <br>Du glömde klicka på plus eller minus-tecknet! :)`;

// Räknaknappen
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", addToLists);
function addToLists() {
  const createLi = document.createElement("li");
  const incomeList = document.querySelector(".income__list");
  const expensesList = document.querySelector(".expenses__list");
  const formName = document.querySelector("#name").value;
  const formValue = document.querySelector("#value").value;
  const radioInput = document.querySelectorAll(".radio__input");
  const warningText = document.querySelector(".warningtext"); // En p-tag att lägga warningtext i.

  // Stäng varningsmeddelanden om de är uppe:
  const bubbleWarning = document.querySelector(".bubble--warning"); // Varnings-bubbla
  bubbleWarning.style.display = "none";

  if (formName !== "" && formValue !== "") {
    // Ta bort från lista-ikonen:
    const removeListIcon = document.getElementsByClassName("icon--listremove");
    // Skapa ikon:
    const createRemoveIcon = '<i class="icon--listremove far fa-times-circle"></i>';
    if (radioInput[0].checked) {
      const incomeBox = document.querySelector(".income"); // Inkomst-containern.
      incomeBox.style.display = "flex";
      incomeList.appendChild(createLi);
      createLi.innerHTML = `${formName} <span class="income__li-price">${formValue}</span> ${createRemoveIcon}`;

      for (let i = 0; i < removeListIcon.length; i++)
        removeListIcon[i].addEventListener("click", function() {
          this.parentElement.remove();
        });
    } else if (radioInput[1].checked) {
      const expensesBox = document.querySelector(".expenses"); // Utgifter-container
      expensesBox.style.display = "flex";
      expensesList.appendChild(createLi);
      createLi.innerHTML = `${formName} <span class="expenses__li-price">${formValue}</span> ${createRemoveIcon}`;

      for (let i = 0; i < removeListIcon.length; i++)
        removeListIcon[i].addEventListener("click", function() {
          this.parentElement.remove();
        });
    } else {
      // Om man inte valt värde i radio-input. (plus eller minus);
      bubbleWarning.style.display = "inline-block";
      warningText.innerHTML = needSelectorInput;
    }
  } else {
    // Om fälten ej är ifyllda.
    bubbleWarning.style.display = "inline-block";
    warningText.innerHTML = needFormInput;
  }
}

/* ---- RÄKNA UT TOTAL ---- */
const vinstTotal = document.querySelector(".vinst");
const incomeList = document.querySelector(".income__list");
const expensesList = document.querySelector(".expenses__list");
const incomeTotal = document.querySelector(".income__total");
const expensesTotal = document.querySelector(".expenses__total");

//MutationObserver config
const config = {
  childList: true, // target's children observeras (Not in a creepy way.)
  subtree: true // target's descendents observeras. (Också ganska creepy.)
};

let incomeLiPriceSum = 0;
let expensesLiPriceSum = 0;

// Total summa inkomst
const updateIncomeObs = new MutationObserver(updateIncome);
updateIncomeObs.observe(incomeList, config);
function updateIncome() {
  const incomeLiPrice = document.querySelectorAll(".income__li-price");
  incomeLiPriceSum = 0;
  for (let i = 0; i < incomeLiPrice.length; i++) {
    incomeLiPriceSum += Number(incomeLiPrice[i].innerHTML);
  }
  incomeTotal.innerHTML = `${Number(incomeLiPriceSum)} kr`;
  vinstTotal.innerHTML = `${incomeLiPriceSum - expensesLiPriceSum} kr`;
}

// Totalsumma utgifter
const updateOutObs = new MutationObserver(updateOut);
updateOutObs.observe(expensesList, config);
function updateOut() {
  const expensesLiPrice = document.querySelectorAll(".expenses__li-price");
  expensesLiPriceSum = 0;
  for (let i = 0; i < expensesLiPrice.length; i++) {
    expensesLiPriceSum += Number(expensesLiPrice[i].innerHTML);
  }
  expensesTotal.innerHTML = `${Number(expensesLiPriceSum)} kr`;
  vinstTotal.innerHTML = `${incomeLiPriceSum - expensesLiPriceSum} kr`;
}

// Vinst
const updateTotalObs = new MutationObserver(updateTotal);
updateTotalObs.observe(vinstTotal, config);
function updateTotal() {
  const vinstContainer = document.querySelector(".vinst-container");
  vinstContainer.style.display = "block";
}
