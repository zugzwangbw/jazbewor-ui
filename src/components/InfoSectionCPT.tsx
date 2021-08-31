import Link from 'next/link'
import React from 'react'
import { Button } from '../styles/pages/ButtonSTL'
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine
} from '../styles/pages/InfoSectionSTL'

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Serviços de qualidade</TopLine>
                <Heading>Valorize seu negócio.</Heading>
                <Subtitle>
                  Levamos significativa valorização para o seu negócio, sistematizando e automatizando seus procedimento
                  tais esse que podemos levantar para você, entre em contato já!
                </Subtitle>
                <BtnWrap>
                  <Link href="/log-in">
                    <Button>Entrar</Button>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={'/04.png'} alt={'Image developer'} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
