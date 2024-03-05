//Converts the Entered tempature(Fahrenheit) to Celsius.
const convertToCelsius = (temp) => {
  Celsius = (temp - 32) * (5/9)
}

//Ask the user to enter a number for temp and enterNum and prints the value after they go threw the functions convertToCelsius() and rand() respectively.
const createMessage = () => {
  convertToCelsius(prompt("Enter Fahrenheit temperature to convert to Celsius: "))
  console.log(`The tempature in Celsius is: ${Celsius}`);

  if(Celsius <= 32) {
    console.log(`I hope you have a coat today.`)
  }
  if(Celsius <= 0) {
    console.log(`Wow! That is really cold`)
  }

  rand(prompt("Put a random number: "))
  console.log(`Random Number is: ${randomNum}`)
}

//Using the enterNum the function creates a random number between 0 and enterNum
const rand = (enterNum) => {
  randomNum = Math.random() * enterNum
}

//starts the program
createMessage()

/* Bonus- Converted Celsius back to Fahrenheit

const convertToFahrenheit = (temp) => {
  Fahrenheit = (temp * 1.8) + 32
}

const createMessage = () => {
  convertToFahrenheit(prompt("Enter Celsius temperature to convert to Fahrenheit: "))
  console.log(Fahrenheit);
}

createMessage() */