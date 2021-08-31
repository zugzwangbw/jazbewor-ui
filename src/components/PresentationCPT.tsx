import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../styles/pages/ButtonSTL'
import { ImgJazbeworLogo } from '../styles/pages/HomeSTL'
import {
  ArrowForward,
  ArrowRight,
  PresentationBg,
  PresentationBtnWrapper,
  PresentationContainer,
  PresentationContent,
  PresentationH1,
  PresentationP,
  VideoBg
} from '../styles/pages/PresentationSTL'

const Presentation = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <>
      <PresentationContainer>
        <PresentationBg>
          <VideoBg autoPlay loop muted src={'/videos/word.mp4'} />
        </PresentationBg>
        <PresentationContent>
          <ImgJazbeworLogo />
          <PresentationH1>Uma nova forma de perceber tecnologia.</PresentationH1>
          <PresentationP>
            Solicite já sua avaliação de orçamento para prever sua economia e ganho nas melhorias com a sistematização
            do seu negócio.
          </PresentationP>
          <PresentationBtnWrapper>
            <Link href="/log-in">
              <Button onMouseEnter={onHover} onMouseLeave={onHover}>
                Iniciar {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </Link>
          </PresentationBtnWrapper>
        </PresentationContent>
      </PresentationContainer>
    </>
  )
}

export default Presentation
