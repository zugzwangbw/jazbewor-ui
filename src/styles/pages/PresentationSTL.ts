import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const PresentationContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

//Darkening the background of video
  :before {
    content: " ";
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%);
    z-index: 2;
  }
`

export const PresentationBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${props => props.theme.colors.background};
`

export const PresentationContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PresentationH1 = styled.h1`
  color: ${props => props.theme.colors.white};;
  font-size: 48px;
  text-align: center;
  margin-top: 24px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and(max-width:480px) {
    font-size: 1rem;
  }
`

export const PresentationP = styled.p`
  margin-top: 24px;
  color: ${props => props.theme.colors.white};;
  font-size: 24px;
  text-align: center;
  max-width: 700px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and(max-width:480px) {
    font-size: 16px;
  }
`

export const PresentationBtnWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
