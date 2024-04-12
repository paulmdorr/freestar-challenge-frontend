import styled from 'styled-components';

const PlayersContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  border: 1px solid black;
  padding: 5px;
`;

export { Main, PlayersContainer, Input };
