import React, { Component } from "react";
import PropTypes from "prop-types";
import * as S from "./style";

export class PostForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    author: "",
    authorIMG: "",
    imgURL: "",
  };

  setAuthor = (event) => {
    this.setState({ author: event.target.value });
  };

  setAuthorIMG = (event) => {
    this.setState({ authorIMG: event.target.value });
  };

  setImgURL = (event) => {
    this.setState({ imgURL: event.target.value });
  };

  addImage = () => {
    this.props.addPost(
      this.state.author,
      this.state.authorIMG,
      this.state.imgURL
    );

    this.setState({ author: "", authorIMG: "", imgURL: "" });
  };

  create;

  render() {
    return (
      <>
        <S.FormWrapper>
          <S.Label>Profile Name:</S.Label>
          <S.Input value={this.state.author} onChange={this.setAuthor} />
          <S.Label>Profile IMG:</S.Label>
          <S.Input value={this.state.authorIMG} onChange={this.setAuthorIMG} />
          <S.Label>IMG URL:</S.Label>
          <S.Input value={this.state.imgURL} onChange={this.setImgURL} />
          <S.Button onClick={this.addImage}>Enviar</S.Button>
        </S.FormWrapper>
      </>
    );
  }
}
export default PostForm;
