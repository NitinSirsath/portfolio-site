import React from "react";
import backGround from "../assets/homeBackground.jpg";
import Skills from '../assets/skills.jpg'
// import { LinkedIn, EmailIcon , GithubIcon } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, WrapperHead,SkillContainer,Icons,ListItems} from "../styles/HomeStyles";

const Home = () => {
  return (
    <Container >
      <WrapperHead background={backGround}>
       <div>
       <h1>Hi, I'm Nitin</h1>
        <p>A software developer with a passion for learning and creating.</p>
      <Icons>
      <LinkedInIcon />
      <EmailIcon />
      <GitHubIcon />
      </Icons>
       </div>
      </WrapperHead>
      <SkillContainer background={Skills}>
        <h1>Skills</h1>
        <div>
          <ListItems><h2>Frond-end</h2>
          <span>ReactJS, NextJS, HTML, CSS, NPM, BootStrap, <br /> Material-UI, StyledComponents, </span></ListItems>
          <ListItems><h2>Design & video</h2>
          <span>LightRoom, PhotoShop, Figma, PremierPro, <br /> PowerDirector </span></ListItems>
          <ListItems><h2>Languages</h2>
          <span>C, JavaScript, Java, Python </span></ListItems>
        </div>
      </SkillContainer>
    
    </Container>
  );
};

export default Home;
