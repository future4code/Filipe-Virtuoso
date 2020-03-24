import React from 'react';
import * as S from './styled';

const MainContainer = props => {
  return <S.MainWrapper>{props.children}</S.MainWrapper>;
};

export default MainContainer;
