import React from "react";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import footerLogo from "../assets/footerLogo.png";
import {
  Container,
  Wrapper,
  LinkSection,
  InfoSection,
  LogoSection,
  SpeechParagraph,
  LinksCard,
  ListItem,
  ListCard,
  BottomFooter
} from "../styles/FooterStyles";

const linkData = [
  {
    id: 1,
    item: facebook,
    link: "https://www.facebook.com/nitin.sirsath.79/",
    alt: "facebook",
  },
  {
    id: 2,
    item: instagram,
    link: "https://www.instagram.com/i_madeyouwonder/",
    alt: "instagram",
  },
  {
    id: 3,
    item: linkedin,
    link: "https://www.linkedin.com/in/nitin-s-254294119/",
    alt: "linkedin",
  },
  {
    id: 4,
    item: twitter,
    link: "https://twitter.com/lostNIII3",
    alt: "twitter",
  },
  {
    id: 5,
    item: youtube,
    link: "https://www.youtube.com/channel/UCT10UNN_quJOaPPp8uf9VcA",
    alt: "youtube",
  },
];

const personalData = [
  {
    id: 1,
    value: "+91 750-760-9484",
  },
  {
    id: 2,
    value: "nitinsirsath8855@gmail.com",
  },
  {
    id: 3,
    value: "Aurangabad, Maharashtra",
  },
];
const stackData = [
  {
    id: 1,
    value: "ReactJS",
  },
  {
    id: 2,
    value: "Google Material UI",
  },
  {
    id: 3,
    value: "Styled-Components",
  },
  {
    id: 4,
    value: "React-Router",
  },
];

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LinkSection>
          <LogoSection>
            <img src={footerLogo} height="40" alt="footer logo" />
            <h2>PORTFOLIO</h2>
          </LogoSection>
          <SpeechParagraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
            Possimus consequuntur soluta maxime id eum molestiae <br /> dolor
            tempora facilis laborum corporis.
          </SpeechParagraph>
          <LinksCard>
            {linkData.map((element) => {
              return (
                <div key={element.id}>
                  <a target="_blank" rel="noreferrer" href={element.link}>
                    <img src={element.item} height="30" alt={element.alt} />
                  </a>
                </div>
              );
            })}
          </LinksCard>
        </LinkSection>
        <InfoSection>
          <div>
            <h3>GET IN TOUCH</h3>
            <ListCard>
              {personalData.map((element) => {
                return <ListItem key={element.id}>{element.value}</ListItem>;
              })}
            </ListCard>
          </div>
          <div>
            <h3>PORTFOLIO STACK</h3>
            <ListCard>
              {stackData.map((element) => {
                return <ListItem key={element.id}>{element.value}</ListItem>;
              })}
            </ListCard>
          </div>
        </InfoSection>
      </Wrapper>
      <BottomFooter>
              <div>Portfolio site</div>
              <p><i>All rights reserved &#169; 2022</i></p>
              <div>A Product by Nitin Sirsath</div>
      </BottomFooter>
    </Container>
  );
};

export default Footer;
