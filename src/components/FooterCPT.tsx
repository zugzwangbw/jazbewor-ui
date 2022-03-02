import Link from 'next/link'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIcons,
  SocialLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from '../styles/pages/FotterSTL'

function FooterCPT() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre nós</FooterLinkTitle>
              <Link href="/" passHref>
                <FooterLink> Como funciona </FooterLink>
              </Link>
              <Link href="/" passHref>
                <FooterLink> Testemunhos </FooterLink>
              </Link>
              <Link href="/" passHref>
                <FooterLink> Carreiras </FooterLink>
              </Link>
              <Link href="/" passHref>
                <FooterLink> Investidores </FooterLink>
              </Link>
              <Link href="/" passHref>
                <FooterLink> Termos de Serviço </FooterLink>
              </Link>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <Link href="/" passHref>
                <FooterLink> Enviar vídeo </FooterLink>
              </Link>
              <Link href="/" passHref>
                <FooterLink> Embaixadores </FooterLink>
              </Link>
              <Link href="/" passHref>
                <FooterLink> Agência </FooterLink>
              </Link>
              <Link href="/" passHref>
                <FooterLink> Influenciador </FooterLink>
              </Link>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Entre em contato conosco </FooterLinkTitle>
              <Link href="/" passHref>
                <FooterLink> Contato </FooterLink>
              </Link>
              <Link href="/" passHref>
                <FooterLink> Suporte </FooterLink>
              </Link>
              <Link href="/" passHref>
                <FooterLink> Destino </FooterLink>
              </Link>
              <Link href="/" passHref>
                <FooterLink> Patrocinadores </FooterLink>
              </Link>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Mídia social </FooterLinkTitle>
              <Link href="https://github.com/zugzwangbw" passHref>
                <FooterLink> GitHub </FooterLink>
              </Link>
              <Link href="https://www.facebook.com/zugzwangbw" passHref>
                <FooterLink> Facebook </FooterLink>
              </Link>
              <Link href="https://twitter.com/zugzwang_bw" passHref>
                <FooterLink> Twitter </FooterLink>
              </Link>
              <Link href="/" passHref>
                <FooterLink> Instagram </FooterLink>
              </Link>
              <Link href="https://www.linkedin.com/in/zugzwangbw" passHref>
                <FooterLink> Linkedin </FooterLink>
              </Link>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>Jazbewor</SocialLogo>
            <WebsiteRights>Jazbewor © {new Date().getFullYear()} Todos os direitos reservados.</WebsiteRights>
            <SocialIcons>
              <SocialLink href="https://github.com/zugzwangbw" target="_blank" aria-label="GitHub">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://www.facebook.com/zugzwangbw" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://twitter.com/zugzwang_bw" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/zugzwang_bw" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/zugzwangbw" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default FooterCPT
