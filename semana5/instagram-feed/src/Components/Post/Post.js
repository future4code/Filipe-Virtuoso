import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      comments: 0,
      text: "",
      icon: "far fa-heart"
    };
  }

  likeImage = () => {
    const iconClass =
      this.state.icon === "far fa-heart" ? "fas fa-heart" : "far fa-heart";
    const likeCount = this.state.likes === 1 ? 0 : 1;
    this.setState({
      likes: likeCount,
      icon: iconClass
    });
  };

  addComment = event => {
    this.setState({ comments: (this.state.comments += 1), text: "" });
  };

  showComment = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <article className="post-area">
        <div className="post-author">
          <img src={this.props.link} alt="Foto do usuário" />
          <h4>{this.props.username}</h4>
        </div>
        <div className="post-image">
          <img src={this.props.imageLink} alt="Imagem do usuário" />
        </div>
        <div className="post-actions">
          <p onClick={this.likeImage} className="likes">
            <span>
              <i class={this.state.icon}></i>
            </span>
            {this.state.likes}
          </p>
          <p className="comments">
            <span>
              <i class="far fa-comment"></i>
            </span>
            {this.state.comments}
          </p>
        </div>
        <div className="text">
          <span className="text" value="this.state.text">
            {this.state.text}
          </span>
        </div>
        <div className="comments-area">
          <input
            onChange={this.showComment}
            type="text"
            placeholder="Escreva um comentário"
            value={this.state.text}
          />
          <button onClick={this.addComment}>Publicar</button>
        </div>
      </article>
    );
  }
}

export default Post;
