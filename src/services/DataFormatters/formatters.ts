// date formatting
export const dateFormatter = (date: Date, format: string): string => {

  let result = "";
  const extractValues = format.split('');

  let substr = extractValues[0];
  for (let char = 0; char < extractValues.length; char++) {

    if (substr[substr.length - 1] === extractValues[char + 1]) {
      substr += extractValues[char + 1];
    } else {
      result += dateToString(date, substr);
      substr = extractValues[char + 1]
    }
  }
  return result
}

const dateToString = (date: Date, toExtract: string): string => {
  switch (toExtract) {
    case "DD": {
      let day = date.getDate()
      return day.toString().padStart(2, '0');
    }
    case "MM": {
      let month = date.getMonth();
      return month.toString().padStart(2, '0');
    }
    case "YYYY": {
      return date.getFullYear().toString();
    }
    case "YY": {
      return date.getFullYear().toString().substring(2)
    }
    case "HH":
      let hours = date.getHours();
      return hours > 10 ? hours.toString() : `0${hours}`;
    case "mm":
      let minutes = date.getMinutes();
      return minutes > 10 ? minutes.toString() : `0${minutes}`;
    case "ss":
      let seconds = date.getSeconds();
      return seconds > 10 ? seconds.toString() : `0${seconds}`;
    case "sss":
      let mseconds = date.getSeconds();
      return mseconds > 10 ? mseconds.toString() : `0${mseconds}`;
    default: {
      return toExtract;
    }
  }
}
