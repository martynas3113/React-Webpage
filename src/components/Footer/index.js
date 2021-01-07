import React from 'react';
import{ FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems, FooterLinkTitle, FooterLink } from './footerElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Destination</FooterLink>
                                <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                                <FooterLink to="/signin">Submit Video</FooterLink>
                                <FooterLink to="/signin">Ambassadors</FooterLink>
                                <FooterLink to="/signin">Agency</FooterLink>
                                <FooterLink to="/signin">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Solutions </FooterLinkTitle>
                                <FooterLink to="/signin">Marketplaces</FooterLink>
                                <FooterLink to="/signin">On-demand</FooterLink>
                                <FooterLink to="/signin">Digital Health</FooterLink>
                                <FooterLink to="/signin">Live Straming</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>LOGO</SocialLogo>
                        <WebsiteRights>LOGO © {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//https://www.facebook.com/martynas.pazusis//' target='_blank' aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                                <FaInstargram />
                            </SocialIconLink>
                            <SocialIconLink href='//https://www.linkedin.com/in/martynas-pa%C5%BEusis-4230ba1bb/' target='_blank' aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='//www.github.com/martynas3113' target='_blank' aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
