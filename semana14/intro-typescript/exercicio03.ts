const posts = [
  { author: 'Filipe', text: 'lorem ipsum' },
  { author: 'Luiz', text: 'random text' },
  { author: 'Flávia', text: 'random text' },
  { author: 'João', text: 'random text' },
  { author: 'Pantera', text: 'random text' },
];

function findPosts(arr: object[], author: string) {
  console.log(arr.filter((el) => el['author'] === author));
}

findPosts(posts, 'Pantera');
