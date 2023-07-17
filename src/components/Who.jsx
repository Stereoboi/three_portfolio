/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { Suspense } from "react";
import { useScroll } from "../hooks/useScroll";
import {
  Section,
  Container,
  Left,
  Title,
  Right,
  WhatWeDo,
  Line,
  Subtitle,
  Desc,
  Button,
} from "./Who.styled";

export default function Who() {
  const { scrollToSection } = useScroll();
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="../../public/img/line.png" />
            <Subtitle>Who am I ?</Subtitle>
          </WhatWeDo>
          <Desc>
            I am a beginner front-end developer who seeks answers every day and
            strives to become better.
          </Desc>
          <Button onClick={() => scrollToSection("works")}>See my works</Button>
        </Right>
      </Container>
    </Section>
  );
}
