import { styled } from "styled-components";
import { BsDiscord, BsTwitter, BsGithub, BsTelegram } from "react-icons/bs";

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
  }
`;

export const TelegramIcon = styled(BsTelegram)`
  font-size: 30px;
  color: rgb(51, 144, 236);
  ${Card1}:hover & {
    color: white;
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
  }
`;
export const TwitterIcon = styled(BsTwitter)`
  font-size: 30px;
  color: #03a9f4;
  ${Card2}:hover & {
    color: white;
  }
`;
export const DownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

export const GitHubIcon = styled(BsGithub)`
  font-size: 30px;
  /* color: aqua; */
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
  }
`;
export const DiscordIcon = styled(BsDiscord)`
  font-size: 30px;
  color: #8c9eff;
  ${Card4}:hover & {
    color: white;
  }
`;
