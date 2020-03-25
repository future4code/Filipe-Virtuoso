import React from 'react';
import * as S from './styled';

const Navbar = props => {
  return (
    <S.NavWrapper>
      <S.Logo>
        <i className="fas fa-music animated infinite pulse"></i> Spotif4
      </S.Logo>
      <S.MenuWrapper>
        <S.Item>
          <S.CustomBG>Criar playlist</S.CustomBG>{' '}
        </S.Item>
        <S.Item>
          <S.Link
            href="https://documenter.getpostman.com/view/4233568/SVtWvmod?version=latest"
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
      </S.MenuWrapper>
    </S.NavWrapper>
  );
};

export default Navbar;
