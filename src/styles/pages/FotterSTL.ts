import styled from 'styled-components';

export const FooterSection = styled.div`

  color: ${props => props.theme.colors.white};
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FooterContainer = styled.footer`
  /* background-color: #101522; */
    background: rgb(49,28,93);
  background: radial-gradient(circle, rgba(49,28,93,1) 0%, rgba(16,21,34,1) 100%);
`;

export const FooterWrap = styled.div`
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width:820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #FCFCFC;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.div`
  color: #FCFCFC;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #5965E0;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width:1000px;
  width:100%;
`;

export const SocialMediaWrap = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  max-width:1100px;
  margin:40px auto 0 auto;

  @media screen and (max-width:820px){
    flex-direction:column;
  }
`;

export const SocialLogo = styled.div`
  color:#FCFCFC;
  justify-self:start;
  cursor: pointer;
  text-decoration:none;
  font-size:1.5rem;
  display:flex;
  align-items:center;
  margin-bottom:16px;
  font-weight:bold;
  font-family: 'Encode Sans Expanded', sans-serif;
`;

export const WebsiteRights = styled.small`
  color:#FCFCFC;
  margin-bottom:16px;
`;

export const SocialIcons = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:240px;
`;

export const SocialLink = styled.a`
  color:#FCFCFC;
  font-size:24px;
`;
