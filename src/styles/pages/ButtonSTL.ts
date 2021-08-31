import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 4px;
  background: ${props => props.theme.colors.blue};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${props => props.theme.colors.white};
  font-size: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.background};
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`
