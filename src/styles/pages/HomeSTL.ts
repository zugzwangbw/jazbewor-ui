import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 156px);

  h1 {
    font-size: 3.5rem;
    color: ${props => props.theme.colors.blue};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
  }

    @media screen and (max-width: 823px) {
        text-align: center;
        h1 {
            font-size: 2rem;
            color: ${props => props.theme.colors.blue};
            margin-top: 24px;
          }

          p {
            font-size: 18px;
          }
    }

`

export const ImgJazbeworLogo = styled.section`
    width: 100%;
    padding-bottom: calc(50vh - 100px);
    background: url(./logo-g-full.svg) center center no-repeat;
    background-size: contain;

    @media screen and (max-width: 823px) {
      margin: 40px 50px 0px 50px;
      padding-bottom: 150px;
    }
`
