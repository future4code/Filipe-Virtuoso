function getPeriod(year: number, initials?: string) {
  if (year < 0 || year > 100000) {
    return 'Ano inválido';
  }

  if (!initials) {
    if (year >= 476) {
      return 'Idade média';
    } else if (year >= 1453) {
      return 'Idade moderna';
    } else if (year >= 1789) {
      return 'Idade contemporânea';
    } else {
      return 'Ano menor do que 476';
    }
  }

  if (year && initials) {
    if (initials === 'AC') {
      if (year > 400 && year <= 100000) {
        return 'Pré-história';
      } else if (year <= 4000) {
        return 'Idade Antiga';
      }
    } else if (initials === 'DC') {
      if (year >= 476 && year < 1453) {
        return 'Idade média';
      } else if (year >= 1453 && year < 1789) {
        return 'Idade moderna';
      } else if (year >= 1789) {
        return 'Idade contemporânea';
      } else {
        return 'Ano menor do que 476';
      }
    }
  }
}

console.log(getPeriod(1992, 'DC'));
console.log(getPeriod(1992, 'AC'));
console.log(getPeriod(1992));
console.log(getPeriod(100000, 'AC'));
console.log(getPeriod(4000, 'AC'));
console.log(getPeriod(490, 'DC'));
console.log(getPeriod(2000, 'DC'));
