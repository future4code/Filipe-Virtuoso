import React, { Component } from "react";
import "./style.css";

export class Feed extends Component {
  state = {
    likes: 0,
    comments: 0,
    comment: "",
    icon: "far fa-heart",
  };

  addLike = () => {
    if (!this.state.likes) {
      this.setState({ likes: this.state.likes + 1, icon: "fas fa-heart" });
    } else {
      this.setState({ likes: this.state.likes - 1, icon: "far fa-heart" });
    }
  };

  addComment = () => {
    this.setState({ comments: this.state.comments + 1, comment: "" });
  };

  doubleClick = () => {
    this.addLike();
  };

  readComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <section className="feed">
        <section className="post-area">
          <div className="post-author">
            <img className="profile-img" src={this.props.profileImg} alt="" />
            <h4>{this.props.username}</h4>
          </div>
          <img
            onDoubleClick={this.doubleClick}
            src={this.props.imgLink}
            alt="new post"
          />
          <div className="like-comment">
            <p onClick={this.addLike}>
              <i className={this.state.icon}></i> {this.state.likes}
            </p>
            <p>
              <i class="far fa-comments"></i> {this.state.comments}
            </p>
          </div>
          <div className="comment-area">
            <input
              type="text"
              onChange={this.readComment}
              value={this.state.comment}
            />
            <button className="addComment" onClick={this.addComment}>
              Comentar
            </button>
          </div>
        </section>
      </section>
    );
  }
}

export default Feed;
