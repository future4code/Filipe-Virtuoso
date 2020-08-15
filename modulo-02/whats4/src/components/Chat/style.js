import styled from "styled-components";

export const ChatWrapper = styled.section`
  grid-column: 2;
  grid-row: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
  color: #b3b3b3;
`;

export const ProfileImg = styled.img`
  width: 4.3%;
  border-radius: 50%;
`;

export const ProfileName = styled.h4`
  color: #444;
  font-weight: bold;
  font-size: 1rem;
  margin-left: 0.75rem;
`;

export const IconsArea = styled.div`
  width: 12%;
  margin-left: auto;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
`;

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 5rem;
  width: 100%;
  height: 82vh;
  background: #fff;
  border-left: 1px solid #ccc;
  overflow-y: auto;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-right: none;
  padding: 0.3rem;
  height: 9vh;
  font-size: 1.2rem;
`;

export const SendInput = styled.input`
  width: 80%;
  margin: 0 1rem;
  padding: 0.75rem;
  border-radius: 20px;
  border: none;
  outline: 0;
`;

export const Message = styled.p`
  background-color: #63ff66;
  padding: 1rem;
  margin: 0.3rem;
  border-radius: 10px;
`;
