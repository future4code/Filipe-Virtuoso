import React from 'react';
import * as S from './styled';

const Activity = props => {
  return (
    <S.ActivityWrapper>
      <S.Title>Suggestion:</S.Title>
      <S.Text>{props.activity.activity}</S.Text>
    </S.ActivityWrapper>
  );
};

export default Activity;
