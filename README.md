# Currency Converter

## Description
The Currency Converter project is a web-based application that allows users to convert an amount from one currency to another in real time. This project leverages HTML, CSS, and JavaScript to provide a user-friendly interface for selecting currencies, entering an amount, and obtaining the converted value.

## Features
- **Real-Time Conversion**: Fetches the latest currency conversion rates from a reliable API.
- **Dynamic Dropdowns**: Users can select currencies from dynamically populated dropdown menus.
- **Default Selections**: The converter sets default currencies (USD to INR) for ease of use.
- **Flag Display**: Displays country flags corresponding to the selected currencies for a visually appealing experience.
- **Validation**: Ensures that the amount entered by the user is valid before performing the conversion.
- **Responsive Design**: The interface is responsive and works well on various screen sizes.

## Technologies Used
- **HTML**: Provides the structure of the application.
- **CSS**: Styles the application for a modern and clean look.
- **JavaScript**: Handles the dynamic aspects of the application, such as fetching data, updating the UI, and managing user interactions.
- **Currency API**: Utilizes the [@fawazahmed0/currency-api](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies) for fetching the latest currency conversion rates.
- **Flags API**: Uses the [Flags API](https://flagsapi.com/) to display country flags.

## How It Works
1. **Dropdown Population**: The dropdown menus for selecting currencies are populated dynamically based on a predefined list of currency codes and their corresponding countries.
2. **Flag Update**: When a user selects a currency from the dropdown, the corresponding country flag is displayed next to the dropdown.
3. **Conversion**: Users enter an amount in the input field and click the convert button. The application fetches the conversion rate from the API and calculates the converted amount.
4. **Display Result**: The converted amount is displayed below the convert button, showing the original amount and the converted value with the appropriate currency symbols.

## User Guide
1. **Select Currencies**: Use the dropdown menus to select the currencies you want to convert from and to.
2. **Enter Amount**: Input the amount you want to convert in the text field.
3. **Convert**: Click the convert button to perform the conversion. The result will be displayed immediately below.
4. **View Flags**: The application automatically displays the flags of the selected currencies for easy identification.

## Example
For example, if you want to convert 100 USD to INR:
1. The "From" dropdown should be set to "USD" (default).
2. The "To" dropdown should be set to "INR" (default).
3. Enter "100" in the amount input field.
4. Click the convert button.
5. The result will display as `100 USD = [converted amount] INR`.

This project provides a simple yet effective way for users to perform currency conversions with up-to-date rates, making it a valuable tool for travelers, businesses, and anyone dealing with multiple currencies.

---

[Visit Currency Converter](https://shubham-vandara.github.io/Currency-Converter/)
