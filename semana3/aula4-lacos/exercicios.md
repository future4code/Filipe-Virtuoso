#### 1 -

Está somando os números de 1 até 14.
No final ele imprime o número 105(total) na tela.



#### 2 -

##### a.

Adiciona um novo elemento ao final de um array.

##### b.

```
[10, 15, 25, 30]
```

##### c.

`3`

```
[12, 15, 18, 21, 27, 30]
```

`4`

```
[12]
```



#### 3 -

##### a.

```
const arr = [1, 2, 3, 4, 5, 6];
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log("O maior número é: " + max + " e o menor número é : " + min);
```

##### b.

```
const arr = [1, 2, 3, 4, 5, 6];

function divideByTen(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] / 10);
  }
  return newArr;
}

divideByTen(arr);
```

##### c.

```
const arr = [1, 2, 3, 4, 5, 6];

function getEvenNumbers(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

getEvenNumbers(arr);
```

##### d.

```
const arr = [1, 2, 3, 4, 5, 6];

function indexIdentifier(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    console.log("O elemento do index " + i + " é " + arr[i]);
  }
}

indexIdentifier(arr);
```











