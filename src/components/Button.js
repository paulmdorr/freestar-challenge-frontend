import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ color }) => color};
  border: 1px solid hsla(0, 0%, 0%, 0.4);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.0125),
    0 1px 1px rgba(0, 0, 0, 0.05);
  border-bottom-width: 0.5rem;
  white-space: nowrap;
  color: hsla(150, 14%, 97%, 1);
  cursor: pointer;
  outline: none;
  font-size: 2rem;
  text-decoration: none;
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  user-select: none;
  padding: 1.5rem 2rem;
  margin: 1rem;
  transition: all 0.1s ease-in;

  ::-moz-focus-inner {
    border: 0;
  }

  @media screen and (max-width: 45em) {
    padding: 1rem 1rem;
    font-size: 1.5rem;
    margin: 0.5rem;
  }

  &:hover {
    background-color: hsla(189, 85%, 32%, 1);
  }

  &:active {
    transform: translateY(0.2rem);
    border-bottom-width: 0.1rem;
  }
`;

export default Button;
