import { useState } from "react";
import { Skills, Projects, SocialMedia, TechStack } from "./work components";
import {
  Section,
  Container,
  Left,
  List,
  ListItem,
  Right,
} from "./Works.styled";
const data = ["Tech stack", "Projects", "About me", "Social Media"];

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Tech stack" ? (
            <TechStack />
          ) : work === "Social Media" ? (
            <SocialMedia />
          ) : work === "About me" ? (
            <Skills />
          ) : (
            <Projects />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
