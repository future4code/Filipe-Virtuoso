import React from 'react';
import * as S from './styled';

const Navbar = props => {
  return (
    <S.NavbarWrapper>
      <S.Title>
        <i className="far fa-address-card"></i> Cadastro
      </S.Title>
      <S.Menu>
        <S.Item>
          <S.Link
            href="#"
            onClick={() => {
              props.showRegister();
            }}
          >
            Cadastro
          </S.Link>
        </S.Item>
        <S.Item>
          <S.Link
            href="#"
            onClick={() => {
              props.showUsers();
            }}
          >
            Usuários
          </S.Link>
        </S.Item>
        <S.Item>
          <S.Link
            href="https://documenter.getpostman.com/view/4233568/SVtWw7Mt?version=latest"
            target="_blank"
          >
            API
          </S.Link>
        </S.Item>
        <S.Item>
          <S.Link href="https://twitter.com/lfvirtuoso" target="_blank">
            @lfvirtuoso
          </S.Link>
        </S.Item>
      </S.Menu>
    </S.NavbarWrapper>
  );
};

export default Navbar;
