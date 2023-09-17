function decimalToBinary(num) {
  if (num === 0) {
    return "0"; // Special case for decimal 0
  }

  let binary = "";
  while (num > 0) {
    // Append the remainder of num divided by 2 to the binary string
    binary = (num % 2) + binary;

    // Integer division by 2 to update num
    num = Math.floor(num / 2);
  }

  return binary;
}

// Example usage:
const decimalNumber = 10; // Change this to the decimal number you want to convert
const binaryNumber = decimalToBinary(decimalNumber);
console.log(binaryNumber);
