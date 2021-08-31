import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;

  background: linear-gradient(108deg, rgba(16, 21, 34, 1) 0%, rgba(49, 28, 93, 1) 100%);
`

export const FormWrap = styled.div`
  height: 100%;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0ch;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`

export const Logo = styled.div`
  margin: 0rem 0 2rem 0;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  color: #fcfcfc;
  font-weight: 700;
  font-size: 32px;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const FormContent = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(16, 21, 34, 0.65);
  z-index: 1;
  padding: 50px 32px;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.4);
  backdrop-filter: blur(1px);

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  display: grid;
  width: 100%;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`

export const FormH1 = styled.h1`
  margin: 0.3rem 0 1.7rem 0;
  color: #fcfcfc;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

export const FormLabel = styled.label`
  font-size: 14px;
  color: #fcfcfc;
`

export const FormInput = styled.input`
  padding: 16px 16px;
  margin: 0.1rem 0 1rem 0;
  border: none;
  border-radius: 4px;
`

export const FormButton = styled.button`
  background: #5965e0;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fcfcfc;
  font-size: 20px;
  cursor: pointer;
  margin: 0.9rem 0 1.5rem 0;
`

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fcfcfc;
  font-size: 14px;
`

// export const IconsLogin = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 2rem 0 3rem 0;
//   width: 80%;
// `;

export const IconsLink = styled.div`
  color: #fcfcfc;
  font-size: 24px;
`

export const LoginWith = styled.h5`
  cursor: pointer;
  text-align: center;
  color: #fcfcfc;
  font-size: 14px;
`

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.2rem 1rem;

  background: radial-gradient(circle, rgba(49, 28, 93, 1) 0%, rgba(16, 21, 34, 1) 100%);
  background-color: rgba(49, 28, 93, 1);
  backdrop-filter: blur(25px);
`

/*
 ** STYLE PaletteLoginSocialWGT
 */

export const ContainerPaletteLoginSocial = styled.div`
  /* background: white; */
  text-align: center;
  color: #fcfcfc;
  font-size: 14px;
`

export const IconsSocialLogin = styled.div`
  margin: 1rem 1rem 0rem 1rem;
  display: flex;
  justify-content: space-between;
`

export const ButtonSocial = styled.button`
  color: #fcfcfc;
  font-size: 30px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`
