import {
  GlobalWrapper,
  MainWrapper,
  UpWrapper,
  Card1,
  Card2,
  Card3,
  Card4,
  DownWrapper,
  SvgInst,
  SvgTw,
  SvgGh,
  SvgDc,
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
              <SvgInst>
                <TelegramIcon />
              </SvgInst>
            </Card1>
          </Link>
          <Link
            to={"https://www.twitter.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card2>
              <SvgTw>
                <TwitterIcon />
              </SvgTw>
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
              <SvgGh>
                <GitHubIcon />
              </SvgGh>
            </Card3>
          </Link>
          <Link
            to={"https://discordapp.com/users/698438244076879872/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card4>
              <SvgDc>
                <DiscordIcon />
              </SvgDc>
            </Card4>
          </Link>
        </DownWrapper>
      </MainWrapper>
    </GlobalWrapper>
  );
}
