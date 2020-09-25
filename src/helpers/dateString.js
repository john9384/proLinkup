function returnDateStr(dateString) {
  const str = dateString.slice(0, 10);
  const arr = str.split("-");
  return `${arr[2]}/${arr[1]}/${arr[0]}`;
}

export default returnDateStr;
