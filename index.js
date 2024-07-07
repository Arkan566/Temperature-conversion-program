document.addEventListener("DOMContentLoaded", function() {
      const textBox = document.getElementById("textBox");
      const toFahrenheit = document.getElementById("toFahrenheit");
      const toCelsius = document.getElementById("toCelsius");
      const result = document.getElementById("result");
  
      function convert() {
          let temp = parseFloat(textBox.value);
          if (isNaN(temp)) {
              result.textContent = "Please enter a valid number.";
              return;
          }
  
          if (toFahrenheit.checked) {
              let fahrenheit = (temp * 9/5) + 32;
              result.textContent = `${temp} °C is ${fahrenheit.toFixed(2)} °F`;
          } else if (toCelsius.checked) {
              let celsius = (temp - 32) * 5/9;
              result.textContent = `${temp} °F is ${celsius.toFixed(2)} °C`;
          } else {
              result.textContent = "Please select a conversion unit.";
          }
      }
  
      window.convert = convert; // Attach the convert function to the window object
  });
  