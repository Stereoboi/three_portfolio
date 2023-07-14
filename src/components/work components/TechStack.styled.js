import { styled } from "styled-components";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiStrapi,
  SiRedux,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";

export const MainWrp = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;

  grid-auto-rows: 100px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    grid-auto-rows: 100px;
  }
`;
export const IconWrp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 5px;
  align-items: center;

  size: 30px;
  background-color: ${(props) => {
    if (props.technology === "React") {
      return `rgb(32,35,42)`;
    }
    if (props.technology === "NextJS") {
      return `rgb(0,0,0)`;
    }
    if (props.technology === "TypeScript") {
      return `rgb(49,120,198)`;
    }
    if (props.technology === "MongoDB") {
      return `rgb(255,255,255)`;
    }
    if (props.technology === "Firebase") {
      return `rgb(255,255,255)`;
    }
    if (props.technology === "Express") {
      return `rgb(238,238,238)`;
    }
    if (props.technology === "Strapi") {
      return `rgb(73,69,255)`;
    }
    if (props.technology === "Redux") {
      return `rgb(255,255,255)`;
    }
    if (props.technology === "NodeJS") {
      return `rgb(35,48,86)`;
    }
    if (props.technology === "JavaScript") {
      return `rgb(239,216,29)`;
    }
  }};
  transition: color 0.3s ease;
  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-size: 25px;
  color: ${(props) => {
    if (props.technology === "React") {
      return `rgb(97, 218, 251)`;
    }
    if (props.technology === "NextJS") {
      return `white`;
    }
    if (props.technology === "TypeScript") {
      return `white`;
    }
    if (props.technology === "MongoDB") {
      return `rgb(17, 97, 73);`;
    }
    if (props.technology === "Firebase") {
      return `rgb(255, 204, 48)`;
    }
    if (props.technology === "Express") {
      return `rgb(164, 164, 164)`;
    }
    if (props.technology === "Strapi") {
      return `white`;
    }
    if (props.technology === "Redux") {
      return `rgb(118, 74, 188)`;
    }
    if (props.technology === "NodeJS") {
      return `rgb(95, 160, 78)`;
    }
    if (props.technology === "JavaScript") {
      return `black`;
    }
  }};
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ReactIcon = styled(FaReact)`
  font-size: 60px;
  color: rgb(97, 218, 251);
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const NextIcon = styled(TbBrandNextjs)`
  font-size: 60px;
  color: white;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const TSIcon = styled(SiTypescript)`
  font-size: 60px;
  color: white;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const MongoIcon = styled(SiMongodb)`
  font-size: 60px;
  color: rgb(17, 97, 73);
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const FirebaseIcon = styled(SiFirebase)`
  font-size: 60px;
  color: rgb(255, 204, 48);
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const ExpressIcon = styled(SiExpress)`
  font-size: 60px;
  color: rgb(164, 164, 164);
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const StrapiIcon = styled(SiStrapi)`
  font-size: 60px;
  color: rgb(255, 255, 255);
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const ReduxIcon = styled(SiRedux)`
  font-size: 60px;
  color: rgb(118, 74, 188);
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const NodeIcon = styled(FaNodeJs)`
  font-size: 60px;
  color: rgb(95, 160, 78);
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const JSIcon = styled(BiLogoJavascript)`
  font-size: 60px;
  color: black;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
