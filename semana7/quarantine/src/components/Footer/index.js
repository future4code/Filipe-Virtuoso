import React from 'react';
import * as S from './styled';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <h3>
        Feito com &nbsp;
        <S.Red>
          <i className="fas fa-heart animated infinite rubberBand"></i> &nbsp;
        </S.Red>
        por
        <S.Link target="_blank" href="https://twitter.com/lfvirtuoso">
          Filipe Virtuoso
        </S.Link>
      </h3>
    </S.FooterWrapper>
  );
};

export default Footer;
