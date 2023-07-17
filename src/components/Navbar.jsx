import { useScroll } from "../hooks/useScroll";
import {
  Section,
  Container,
  Links,
  Logo,
  List,
  ListItem,
  Icons,
  Button,
} from "./Navbar.styled";
export default function Navbar() {
  const { scrollToSection } = useScroll();

  return (
    <Section>
      <Container>
        <Links>
          <Logo>STEREOBOI PORTFOLIO</Logo>
          <List>
            <List>
              <ListItem onClick={() => scrollToSection("works")}>
                Works
              </ListItem>
              <ListItem onClick={() => scrollToSection("contacts")}>
                Contact me
              </ListItem>
            </List>
          </List>
        </Links>
        <Icons>
          {/* <Icon src={searchImg} /> */}
          <Button onClick={() => scrollToSection("contacts")}>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
}
