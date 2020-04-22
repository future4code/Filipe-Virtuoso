function calcArr(numArr: number[]) {
  let result = 0;

  numArr.forEach((el) => (result += el));
  return {
    totalNum: numArr.length,
    oddTotal: numArr.filter((el) => el % 2 === 0).length,
    result,
  };
}

calcArr([1, 2, 3, 4]);
