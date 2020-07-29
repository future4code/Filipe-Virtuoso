// Post
class Post {
  constructor(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text;
  }
}

const posts = [];
const postsSection = document.getElementById("posts-section");

const addPost = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const text = document.getElementById("description").value;

  posts.push(new Post(title, author, text));
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("description").value = "";
  loadPosts();
};

const loadPosts = () => {
  postsSection.innerHTML = "";
  for (let i = posts.length - 1; i >= 0; i--) {
    console.log(posts[i]);
    postsSection.innerHTML +=
      "<article><h3><span>" +
      posts[i].title +
      "</span></h3>" +
      "<h4>Author: " +
      posts[i].author +
      "</h4>" +
      "<p>" +
      posts[i].text +
      "</p>";
  }
};
