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
  // TestL,
} from "./SocialMedia.styled";
import { BsDiscord, BsTwitter, BsGithub, BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SocialMedia() {
  return (
    <GlobalWrapper>
      {/* <TestL>FUCK</TestL> */}
      <MainWrapper>
        <UpWrapper>
          <Link
            to={"https://t.me/Pish4aA"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card1>
              <SvgInst>
                <BsTelegram size={30} />
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
                <BsTwitter size={30} />
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
                <BsGithub size={30} />
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
                <BsDiscord size={30} />
              </SvgDc>
            </Card4>
          </Link>
        </DownWrapper>
      </MainWrapper>
    </GlobalWrapper>
  );
}
