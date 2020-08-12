import React, { Component } from "react";
import PropTypes from "prop-types";
import * as S from "./style";

export class index extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    likes: 0,
    comments: 0,
    comment: "",
    icon: "far fa-heart",
  };

  static propTypes = {
    author: PropTypes.string.isRequired,
    authorImg: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
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
      <div>
        <S.SectionWrapper>
          <S.PostWrapper>
            <S.PostAuthor>
              <S.AuthorImage src={this.props.authorImg} alt="" />
              <S.AuthorName>{this.props.author}</S.AuthorName>
            </S.PostAuthor>
            <S.PostImage
              src={this.props.postImage}
              onDoubleClick={this.doubleClick}
            />
            <S.ActionsWrapper>
              <p onClick={this.addLike}>
                <i className={this.state.icon}></i> {this.state.likes}
              </p>
              <p>
                <i className="far fa-comments"></i> {this.state.comments}
              </p>
            </S.ActionsWrapper>
            <S.CommentsWrapper>
              <S.CommentInput
                type="text"
                onChange={this.readComment}
                value={this.state.comment}
              />
              <S.CommentButton className="addComment" onClick={this.addComment}>
                Comentar
              </S.CommentButton>
            </S.CommentsWrapper>
          </S.PostWrapper>
        </S.SectionWrapper>
      </div>
    );
  }
}

export default index;
