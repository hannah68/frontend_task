import * as S from "./styles";

import { links, legals, socialIcons } from "../utils";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterTopContent>
        <S.FooterTopLeft>
          <S.Logo>
            <img src="/icon.png" alt="courtcorret logo" />
            <span>courtcorret</span>
          </S.Logo>
          <p>Justice for all.</p>
          <ul>
            <li>hello@courtcorrect.com</li>
            <li>33 Percy St,London W1T 2DF</li>
            <li>020 7867 39 25</li>
          </ul>
        </S.FooterTopLeft>
        <S.FooterTopRight>
          <S.FooterLinks>
            {links.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </S.FooterLinks>
          <S.FooterLegals>
            {legals.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </S.FooterLegals>
        </S.FooterTopRight>
      </S.FooterTopContent>
      <S.FooterBottomContent>
        <span>&copy; 2023 Courtcorrect LTD</span>
        <S.SocialMedia>
          {socialIcons.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </S.SocialMedia>
      </S.FooterBottomContent>
    </S.FooterContainer>
  );
};

export default Footer;
