import React, { Component } from "react";
import PropTypes from "prop-types";

import * as S from "./style";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      message: "",
    };
  }
  static propTypes = {};

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(this.state.message);
      this.props.addMessage("lfvirtuso", this.state.message);
      this.setState({ message: "" });
    }
  };

  handleMessageInput = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    const showMessages = this.props.messages.map((el, index) => {
      return <S.Message>{el.message}</S.Message>;
    });
    return (
      <S.ChatWrapper>
        <S.ChatHeader>
          <S.ProfileImg src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg" />
          <S.ProfileName>Fábio</S.ProfileName>
          <S.IconsArea>
            <i className="fas fa-search"></i>
            <i className="fas fa-paperclip"></i>
            <i className="fas fa-ellipsis-v"></i>
          </S.IconsArea>
        </S.ChatHeader>
        <S.MessagesWrapper>{showMessages}</S.MessagesWrapper>
        <S.FormWrapper>
          <i className="far fa-grin-beam"></i>
          <S.SendInput
            placeholder="Digite uma mensagem"
            value={this.state.message}
            onChange={this.handleMessageInput}
            onKeyDown={this.handleKeyDown}
          />
          <i className="fas fa-microphone"></i>
        </S.FormWrapper>
      </S.ChatWrapper>
    );
  }
}

export default Chat;
