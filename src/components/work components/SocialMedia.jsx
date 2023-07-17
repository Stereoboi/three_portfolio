import {
  GlobalWrapper,
  MainWrapper,
  UpWrapper,
  Card1,
  Card2,
  Card3,
  Card4,
  DownWrapper,
  DiscordIcon,
  TwitterIcon,
  GitHubIcon,
  TelegramIcon,
} from "./SocialMedia.styled";
import { Link } from "react-router-dom";

export default function SocialMedia() {
  return (
    <GlobalWrapper>
      <MainWrapper>
        <UpWrapper>
          <Link
            to={"https://t.me/Pish4aA"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card1>
              <TelegramIcon />
            </Card1>
          </Link>
          <Link
            to={"https://www.twitter.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card2>
              <TwitterIcon />
            </Card2>
          </Link>
        </UpWrapper>
        <DownWrapper>
          <Link
            to={"https://github.com/Stereoboi"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card3>
              <GitHubIcon />
            </Card3>
          </Link>
          <Link
            to={"https://discordapp.com/users/698438244076879872/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card4>
              <DiscordIcon />
            </Card4>
          </Link>
        </DownWrapper>
      </MainWrapper>
    </GlobalWrapper>
  );
}
