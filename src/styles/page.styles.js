import styled from 'styled-components';

const PlayersContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  border: 1px solid black;
  padding: 5px;
`;

export { Main, PlayersContainer, Input };
