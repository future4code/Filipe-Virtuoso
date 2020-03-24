import React from 'react';
import * as S from './styled';

const Navbar = () => {
  return (
    <S.NavbarWrapper>
      <S.Logo>
        Quarantine time{' '}
        <S.Red>
          <i className="fas fa-exclamation-triangle"></i>
        </S.Red>
      </S.Logo>
      <S.MenuWrapper>
        <S.Item>
          <S.Link
            target="_blank"
            href="https://www.notion.so/Aula-27-Browsers-e-Servidores-7f3760535cdb4868804fbea02cf7c09f"
          >
            API
          </S.Link>
        </S.Item>
        <S.Item>
          <S.Link target="_blank" href="https://twitter.com/lfvirtuoso">
            @lfvirtuoso
          </S.Link>
        </S.Item>
      </S.MenuWrapper>
    </S.NavbarWrapper>
  );
};

Navbar.propTypes = {};

export default Navbar;
