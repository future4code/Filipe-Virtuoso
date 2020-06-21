## Exercícios

### 1

a.
VARCHAR server para guardar strings, PRIMARY define um identificador 
único para o dado, DATE armazena uma data e NOT NULL faz com o que campo não possa ter um valor nulo.

b.
SHOW DATABASES retorna os bancos e SHOW TABLES retorna as tables criadas, nesse momento tenho um banco criado com o meu nome e uma tabela chamada Actors que criei no começo desse exercício.

c.
SHOW Actors retorna um erro, usando o comando SHOW WARNINGS podemos ver qual é o erro. 

Nesse caso:
'Error', '1064', 'You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near \'Actor\' at line 1'

### 2 

a.
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
	1200000,
    "1963-08-23",
    "female"
);
```
b.
Não é o possível já que o ID é uma PRIMARY KEY,

`Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'`

c.
Faltaram as colunas `birth_date` e `gender`

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d.
Faltou informar a coluna `name`

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Guilherme",
  400000,
  "1949-04-18", 
  "male"
);
```

e.
`birth_date` precisa ser passada como uma string no formato "YYYY-MM-DD".

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```

### 3

a.
`SELECT * FROM Actor WHERE gender = 'female';`

b.
`SELECT salary FROM Actor where name = 'Tony Ramos';`

c.
`SELECT * FROM Actor WHERE gender = "invalid";`
Retorna a última linha da tabela.

d.
`SELECT id, name, salary FROM Actor WHERE salary <= 500000;`

e.
O nome correto da coluna é `name` ao invés de `nome`

### 4

a.
A query seleciona os atores que começam com uma das letras informdas(A ou J) e 
que tenham um salário maior do que 300000.

b.
`SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;`

c.
`SELECT * FROM Actor WHERE name LIKE "%G%";`

d.
`SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000; `

### 5

a.
```sql
CREATE TABLE Filmes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sinopse TEXT NOT NULL,
    estreia DATE NOT NULL,
    avaliacao INT NOT NULL
);
```
TEXT é um tipo que armazena até 64KB. 

### 6

a.
`SELECT id, nome, avaliacao FROM Filmes WHERE id = 1;`

b.
`SELECT * FROM Filmes WHERE nome = 'Harry Potter';`

c.
`SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;`

### 7

a.
`SELECT * FROM Filmes WHERE nome LIKE '%vida%';`

b.
`SELECT * FROM Filmes WHERE nome LIKE '%TERMO DE BUSCA%' OR sinopse LIKE '%TERMO DE BUSCA%';`

c.
`SELECT * FROM Filmes WHERE YEAR(estreia) < 2020;`

d.
```sql
SELECT * FROM Filmes
WHERE estreia < CURDATE() AND 
      (nome LIKE "%TERMO DE BUSCA%" OR
      sinopse LIKE "%TERMO DE BUSCA%") AND avaliacao > 7;
```