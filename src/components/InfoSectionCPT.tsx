import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  BtnWrap,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from "../styles/pages/InfoSectionSTL";
import { Button } from "../styles/pages/ButtonSTL";
import React from "react";
import Link from "next/link";

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
                <Subtitle>Levamos significativa valorização para o seu negócio, sistematizando e automatizando seus procedimento tais esse que podemos levantar para você, entre em contato já!</Subtitle>
                <BtnWrap>
                  <Link href="/sign-in">
                  <Button>
                    Entrar
                  </Button>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={"/developer.svg"} alt={"Image developer"} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
