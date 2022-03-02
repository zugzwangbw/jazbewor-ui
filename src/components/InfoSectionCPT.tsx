import Link from 'next/link'
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

function InfoSection() {
  return (
    <InfoContainer>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>Serviços de qualidade</TopLine>
              <Heading>Valorize seu negócio.</Heading>
              <Subtitle>
                Levamos significativa valorização para o seu negócio, sistematizando e automatizando seus procedimento
                tais esse que podemos mapear para você, entre em contato já!
              </Subtitle>
              <BtnWrap>
                <Link href="/log-in" passHref>
                  <Button>Entrar</Button>
                </Link>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src="/04.png" alt="Image developer" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
