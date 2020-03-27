import React from 'react';
import * as S from './styled';

const Home = () => {
  return (
    <S.HomeWrapper>
      <S.Overlay>
        <S.Title>Aproveite 1 mês grátis de Premium</S.Title>
        <S.Lead>Depois, apenas R$ 16,90/mês. Cancele quando quiser.</S.Lead>
        <S.Button>Ver planos</S.Button>
      </S.Overlay>
    </S.HomeWrapper>
  );
};

export default Home;
