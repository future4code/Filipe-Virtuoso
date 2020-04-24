import axios, { AxiosResponse } from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

// Params
const operationType = process.argv[2];
const id1 = process.argv[3];
const id2 = process.argv[4];
const id3 = process.argv[5];

console.log(operationType, id1, id2, id3);

if (operationType === 'getPost' && id1) {
  const result: Promise<AxiosResponse> = axios.get(`$baseUrl/${id2}`);

  result
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
} else if (operationType === 'getPosts' && id1 && id2 && id3) {
  const result1: Promise<AxiosResponse> = axios.get(`${baseUrl}/${id1}`);
  const result2: Promise<AxiosResponse> = axios.get(`${baseUrl}/${id2}`);
  const result3: Promise<AxiosResponse> = axios.get(`${baseUrl}/${id3}`);
  Promise.all([result1, result2, result3])
    .then((values) => {
      console.log(values.map((item) => item.data));
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  console.log('Informe valores válidos!');
}
