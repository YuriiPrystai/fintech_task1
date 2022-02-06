const sumFormatting = (value) => {
  if (String(value).split('.').length > 2 || !value || !Number(value) || typeof(value) === 'boolean') {
    return 'Invalid format. Cannot be formatted'
  }
  let arrayFromTwoPartsOfValue = String(Number(value).toFixed(2)).split('.')
  let formattedSum = ''
  let [integerPart, fractionalPart] = arrayFromTwoPartsOfValue
  for (let i = integerPart.length - 1; i >= 0; i -= 3) {
    formattedSum = `${integerPart.substring(i - 2, i + 1)} ${formattedSum}`
  }
  formattedSum = `${formattedSum.trim()}.${fractionalPart}`

  return formattedSum
}

sumFormatting(7052.45) // 7 052.45
sumFormatting(7052.4) // 7 052.40
sumFormatting('string') // Invalid format. Cannot be formatted
sumFormatting(false) // Invalid format. Cannot be formatted
sumFormatting(true) // Invalid format. Cannot be formatted
sumFormatting('2533g') // Invalid format. Cannot be formatted
sumFormatting('2534533') // 2 534 533.00
sumFormatting(-2534533) // -2 534 533.00
sumFormatting(1234567891234567890) // 1 234 567 891 234 567 936.00
