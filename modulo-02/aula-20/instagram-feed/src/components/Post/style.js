import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  background-color: #fff;
`;

export const PostWrapper = styled.section`
  margin-left: 12rem;
  margin-top: 4rem;
  padding: 0.2rem;
  width: 40%;
  height: 50%;
  border: 1px solid #444;
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.img`
  width: 10%;
  border-radius: 50%;
`;

export const AuthorName = styled.h4`
  margin-left: 1rem;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 0.3rem;
  outline: 0;
`;

export const CommentButton = styled.button`
  cursor: pointer;
  margin-left: 0.2rem;
`;
