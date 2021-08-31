import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;

  font-size: 1.5rem;

  table {
    margin-top: 10px;
    border: 1px solid white;
  }

  button {
    font-size: 1.5rem;
    margin-right: 10px;
  }

  input,
  textarea {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
`
