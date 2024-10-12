import React from "react";
import {
  FooterContainer,
  FooterTopContent,
  FooterBottomContent,
  FooterTopLeft,
  FooterTopRight,
  FooterLegals,
  FooterLinks,
  SocialMedia,
  Logo,
} from "./styles";
import { FaSquareFacebook, FaTwitter, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTopContent>
        <FooterTopLeft>
          <Logo>
            <img src="/icon.png" alt="courtcorret logo" />
            <span>courtcorret</span>
          </Logo>
          <p>Justice for all.</p>
          <ul>
            <li>hello@courtcorrect.com</li>
            <li>33 Percy St,London W1T 2DF</li>
            <li>020 7867 39 25</li>
          </ul>
        </FooterTopLeft>
        <FooterTopRight>
          <FooterLinks>
            <li>Quick Links</li>
            <li>Home</li>
            <li>Data</li>
            <li>Cases</li>
            <li>Customers</li>
            <li>Search Engine</li>
            <li>custom Fields</li>
            <li>Support</li>
          </FooterLinks>
          <FooterLegals>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>AI Safety Policy</li>
            <li>Cookie Policy</li>
            <li>Compliance Statement</li>
          </FooterLegals>
        </FooterTopRight>
      </FooterTopContent>
      <FooterBottomContent>
        <span>&copy; 2023 Courtcorrect LTD</span>
        <SocialMedia>
          <li>
            <FaSquareFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaTiktok />
          </li>
        </SocialMedia>
      </FooterBottomContent>
    </FooterContainer>
  );
};

export default Footer;
