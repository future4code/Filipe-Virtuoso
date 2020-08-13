import React from "react";
import * as S from "./style";

const Navbar = () => {
  return (
    <S.NavWrapper>
      <S.Logo>
        <i className="fab fa-instagram"></i> Instagram
      </S.Logo>
      <S.SearchInput placeholder="Pesquisar" />
      <S.Menu>
        <S.MenuItem>
          <S.Link href="">
            <i className="fas fa-home"></i>
          </S.Link>
        </S.MenuItem>
        <S.MenuItem>
          <S.Link href="">
            <i className="fab fa-telegram-plane"></i>
          </S.Link>
        </S.MenuItem>
        <S.MenuItem>
          <S.Link href="">
            <i className="far fa-compass"></i>
          </S.Link>
        </S.MenuItem>
        <S.MenuItem>
          <S.Link href="">
            <i className="far fa-heart"></i>
          </S.Link>
        </S.MenuItem>
      </S.Menu>
    </S.NavWrapper>
  );
};

export default Navbar;
