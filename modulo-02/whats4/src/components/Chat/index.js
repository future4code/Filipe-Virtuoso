import React, { Component } from "react";
import PropTypes from "prop-types";

import * as S from "./style";

export class Chat extends Component {
  static propTypes = {};

  render() {
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
        <S.MessagesWrapper></S.MessagesWrapper>
        <S.FormWrapper>
          <i className="far fa-grin-beam"></i>
          <S.SendInput placeholder="Digite uma mensagem" />
          <i class="fas fa-microphone"></i>
        </S.FormWrapper>
      </S.ChatWrapper>
    );
  }
}

export default Chat;
