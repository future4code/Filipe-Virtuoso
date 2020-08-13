import React from "react";
import * as S from "./style";

const Contacts = (props) => {
  return (
    <S.ContactsWrapper>
      <S.ActionsWrapper>
        <S.ProfileImg src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg" />
        <S.ButtonsWrapper>
          <i className="fas fa-sync-alt"></i>
          <i className="fas fa-comment-alt"></i>
          <i className="fas fa-ellipsis-v"></i>
        </S.ButtonsWrapper>
      </S.ActionsWrapper>
      <S.SearchWrapper>
        <S.I className="search-icon fas fa-search"></S.I>
        <S.SearchInput placeholder="Pesquisar" />
      </S.SearchWrapper>
      <S.ChatWrapper>
        <S.ProfileImg src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg" />
        <S.MessageWrapper>
          <S.Name>Flávia</S.Name>
          <p>Lorem ipsum dolor sit amet.</p>
        </S.MessageWrapper>
        <S.InfoWrapper>
          <S.Time>12:30</S.Time>
          <S.Count>13</S.Count>
        </S.InfoWrapper>
      </S.ChatWrapper>
      <S.ChatWrapper>
        <S.ProfileImg src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg" />
        <S.MessageWrapper>
          <S.Name>Filipe</S.Name>
          <p>Lorem ipsum dolor sit amet.</p>
        </S.MessageWrapper>
        <S.InfoWrapper>
          <S.Time>12:30</S.Time>
          <S.Count>13</S.Count>
        </S.InfoWrapper>
      </S.ChatWrapper>
      <S.ChatWrapper>
        <S.ProfileImg src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg" />
        <S.MessageWrapper>
          <S.Name>Fábio</S.Name>
          <p>Lorem ipsum dolor sit amet.</p>
        </S.MessageWrapper>
        <S.InfoWrapper>
          <S.Time>12:30</S.Time>
          <S.Count>13</S.Count>
        </S.InfoWrapper>
      </S.ChatWrapper>
    </S.ContactsWrapper>
  );
};

export default Contacts;
