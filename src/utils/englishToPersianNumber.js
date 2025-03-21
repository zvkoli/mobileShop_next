export const englishToPersianNumber = (number) => {

  const numberSeparator = (number , separator) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }
  
  const convertToPersianNumbers = (number) => {
    const persianNumbers = {
      '0': '۰',
      '1': '۱',
      '2': '۲',
      '3': '۳',
      '4': '۴',
      '5': '۵',
      '6': '۶',
      '7': '۷',
      '8': '۸',
      '9': '۹',
    };

    return number.toString().replace(/\d/g, (match) => persianNumbers[match]);
  }

  const separatedNumber = numberSeparator(number , ',');
  const persianNumber = convertToPersianNumbers(separatedNumber);
  
  return persianNumber;
}

// 74000000 >> ۷۴,۰۰۰,۰۰۰