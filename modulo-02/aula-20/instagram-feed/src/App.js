import React, { Component } from "react";
import GlobalStyles from "./styles/global";

// Components
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import Post from "./components/Post";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    posts: [
      {
        author: "lfvirtuoso",
        authorImg:
          "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg",
        postImage:
          "https://www.egali.com.br/wp-content/uploads/2019/10/egali-intercambio-curiosidades-sobre-a-irlanda-sol.jpg",
      },
    ],
  };

  addImage = (author, authorImg, postImage) => {
    const newPost = {
      author,
      authorImg,
      postImage,
    };

    this.setState({ posts: [newPost, ...this.state.posts] });
  };

  render() {
    const list = this.state.posts.map((post, index) => {
      return (
        <Post
          key={index}
          author={post.author}
          authorImg={post.authorImg}
          postImage={post.postImage}
        />
      );
    });
    return (
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <PostForm addPost={this.addImage} />
        {list}
      </div>
    );
  }
}

export default App;
