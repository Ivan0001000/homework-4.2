let number = prompt("Enter a three-digit number");

if (number.length === 3 && !isNaN(number)) {
  let digits = number.split("");

  // Перевірка, чи всі цифри однакові
  let allSame = digits[0] === digits[1] && digits[1] === digits[2];

  // Перевірка, чи є серед цифр однакові
  let anySame =
    digits[0] === digits[1] ||
    digits[0] === digits[2] ||
    digits[1] === digits[2];

  console.log(`Are all numbers equal? ${allSame}`);
  console.log(`Are any equal numbers? ${anySame}`);
} else {
  console.log("Please, enter a three-digit number");
}
