export const addLeadingZerosToNumber = (number: number, totalLength: number) => {
  return String(number).padStart(totalLength, '0')
}
