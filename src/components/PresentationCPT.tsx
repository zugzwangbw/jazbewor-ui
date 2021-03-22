import React, { useState } from "react"
import {
  PresentationContainer,
  PresentationBg,
  VideoBg,
  PresentationContent,
  PresentationH1,
  PresentationP,
  PresentationBtnWrapper,
  ArrowRight,
  ArrowForward,
} from "../styles/pages/PresentationSTL";
import { Button } from "../styles/pages/ButtonSTL";
import Link from "next/link";
import { ImgJazbeworLogo } from '../styles/pages/HomeSTL'


const Presentation = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
    <PresentationContainer>
      <PresentationBg>
        <VideoBg autoPlay loop muted src={"/videos/word.mp4"}/>
      </PresentationBg>
      <PresentationContent>
        <ImgJazbeworLogo />
        <PresentationH1>Uma nova forma de perceber tecnologia.</PresentationH1>
        <PresentationP>
          Solicite já sua avaliação de orçamento para prever sua economia e ganho nas melhorias com a sistematização do seu negócio.
        </PresentationP>
        <PresentationBtnWrapper>
          <Link href="/sign-in">
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Iniciar {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </Link>
        </PresentationBtnWrapper>
      </PresentationContent>
    </PresentationContainer>
    </>
  );
};

export default Presentation;
