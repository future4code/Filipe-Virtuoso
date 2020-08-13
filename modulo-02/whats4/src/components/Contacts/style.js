import styled from "styled-components";

export const ContactsWrapper = styled.section`
  grid-column: 1;
  grid-row: 1;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-bottom: none;
  padding: 0.5rem;
  color: #b3b3b3;
`;

export const ProfileImg = styled.img`
  width: 10%;
  border-radius: 50%;
`;

export const ButtonsWrapper = styled.div`
  margin-right: 1rem;
  width: 25%;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-right: none;
  padding: 0.5rem;
`;

export const SearchInput = styled.input`
  width: 95%;
  padding: 0.6rem;
  border-radius: 20px;
  border: none;
  outline: 0;
  text-align: center;
`;

export const I = styled.i`
  position: absolute;
  padding: 1rem;
`;

export const ChatWrapper = styled.div`
  display: flex;
  padding: 0.75rem;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.75rem;
`;

export const Name = styled.h4`
  font-weight: bold;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
`;

export const Time = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 0.1rem;
`;

export const Count = styled.p`
  background-color: #38eb56;
  padding: 0.1rem;
  color: #fff;
  font-size: 0.85rem;
  text-align: center;
  border-radius: 20px;
`;
