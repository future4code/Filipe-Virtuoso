import React from 'react';
import * as S from './styled';

const Info = props => {
  return (
    <>
      <S.InfoWrapper orange>
        <S.Title>ATTENTION!</S.Title>
        <S.Text>
          Everybody needs to stay inside so we can end this situation as fast as
          possible. I know it can get pretty boring sometimes so I thought we
          could use this time to learn something new, click the button below and
          give it a shot.
        </S.Text>
        <S.Button onClick={props.getRandomActivity}>Learn</S.Button>
      </S.InfoWrapper>
    </>
  );
};

export default Info;
