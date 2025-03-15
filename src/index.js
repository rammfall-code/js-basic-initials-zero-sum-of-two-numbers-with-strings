function askNumber(message) {
  let number;

  do {
    number = prompt(message);

    if (number === null) {
      return null;
    }
  } while (isNaN(number) || number.trim() === '');

  return +number;
}

const firstNum = askNumber('Enter first number');

if (firstNum === null) {
  alert('you cancelled');
} else {
  const secNum = askNumber('Enter second number');

  if (secNum === null) {
    alert('you cancelled');
  } else {
    const sum = firstNum + secNum;

    alert(`${firstNum}+${secNum}=${sum}`);
  }
}
