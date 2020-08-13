import React from "react";
import * as S from "./style";

const Container = (props) => {
  return <S.ContainerGrid>{props.children}</S.ContainerGrid>;
};

export default Container;
