//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const value = Number(input.value.trim());

  if (isNaN(value) || input.value.trim() === "") {
    output.textContent = "Please enter a valid number!";
    return;
  }

  // Initial Promise (2s delay) → show input value
  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = `Result: ${value}`;
      resolve(value);
    }, 2000);
  })
    // Second Promise (2s) → multiply by 2
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num * 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    // Third Promise (1s) → subtract 3
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num - 3;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    // Fourth Promise (1s) → divide by 2
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num / 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    // Fifth Promise (1s) → add 10 (Final result)
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num + 10;
          output.textContent = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .catch((err) => {
      output.textContent = "Error: " + err;
    });
});
