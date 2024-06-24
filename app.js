const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns with currency options and set default selections
for (let select of dropdowns) {
  for (currencyCode in countryList) {
    let option = document.createElement("option");
    option.innerText = currencyCode;
    option.value = currencyCode;
    select.append(option);

    if (select.name === "from" && currencyCode === "USD") {
      option.selected = "selected";
    } else if (select.name === "to" && currencyCode === "INR") {
      option.selected = "selected";
    }
  }

  select.addEventListener("change", (event) => {
    updateFlag(event.target);
  });
}

const updateFlag = (element) => {
  const currencyCode = element.value;
  const countryCode = countryList[currencyCode];
  const img = element.parentElement.querySelector("img");

  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
  img.alt = currencyCode;
};

const updateExchangeRate = async () => {
  const amount = document.querySelector(".amount input");
  const amountValue = amount.value;

  if (amountValue === "" || amountValue <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  const fromCurrencyValue = fromCurrency.value.toLowerCase();
  const toCurrencyValue = toCurrency.value.toLowerCase();
  const URL = `${BASE_URL}/${fromCurrencyValue}.json`;

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const conversionRate = data[fromCurrencyValue][toCurrencyValue];
    const finalValue = amountValue * conversionRate;

    msg.innerText = `${amountValue} ${
      fromCurrency.value
    } = ${finalValue.toFixed(2)} ${toCurrency.value}`;
  } catch (error) {
    console.error("Error fetching the conversion rate:", error);
    msg.innerText =
      "Failed to retrieve conversion rate. Please try again later.";
  }
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
