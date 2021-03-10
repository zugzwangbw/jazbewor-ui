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
    line-height: 32px;
  }

    @media screen and (max-width: 823px) {
        text-align: center;
        h1 {
            font-size: 2rem;
            color: ${props => props.theme.colors.blue};
            margin-top: 24px;
          }

          p {
            margin-bottom: 40px;
            font-size: 18px;
            line-height: 24px;
          }
    }

`

export const ImgHomo = styled.section`
    width: 100%;
    padding-bottom: 500px;
    background: url(./home-img.svg) center center no-repeat;
    background-size: cover;

    @media screen and (max-width: 823px) {
      padding-bottom: 200px;
    }
`

export const ImgJazbeworLogo = styled.section`
    width: 100%;
    padding-bottom: calc(100vh - 600px);
    background: url(./logo-g-full.svg) center center no-repeat;
    background-size: contain;

    @media screen and (max-width: 823px) {
      margin: 40px 50px 0px 50px;
      padding-bottom: 150px;
    }
`
