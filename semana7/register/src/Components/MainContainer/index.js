import React from 'react';
import * as S from './styled';

const MainContainer = props => {
  return <S.LayoutWrapper>{props.children}</S.LayoutWrapper>;
};

export default MainContainer;
