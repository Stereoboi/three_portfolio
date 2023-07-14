import { styled } from "styled-components";
import { BsDiscord, BsTwitter, BsGithub, BsTelegram } from "react-icons/bs";

export const DiscordIcon = styled(BsDiscord)`
  font-size: 30px;
`;
export const TwitterIcon = styled(BsTwitter)`
  font-size: 30px;
`;
export const GitHubIcon = styled(BsGithub)`
  font-size: 30px;
`;
export const TelegramIcon = styled(BsTelegram)`
  font-size: 30px;
`;

export const GlobalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const UpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

export const Card1 = styled.button`
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 90px 5px 5px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: rgb(51, 144, 236);
    color: white;
    fill: white;
  }
`;
export const Card2 = styled.button`
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 90px 5px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #03a9f4;
    color: white;
    fill: white;
  }
`;
export const DownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;
export const Card3 = styled.button`
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 5px 5px 90px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: rgb(82, 80, 80);
    color: white;
    fill: white;
  }
`;
export const Card4 = styled.button`
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 5px 90px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #8c9eff;
    color: white;
    fill: white;
  }
`;
export const SvgInst = styled.div``;
export const SvgTw = styled.div``;
export const SvgGh = styled.div``;
export const SvgDc = styled.div``;
