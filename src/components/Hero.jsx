import cosmonaut from "../../public/img/cosmonaut.png";
import lineImg from "../../public/img/line.png";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";
import { useScroll } from "../hooks/useScroll";
import {
  Subtitle,
  Section,
  Container,
  Left,
  Title,
  WhatWeDo,
  Line,
  Desc,
  Button,
  Right,
  Img,
} from "./Hero.styled";
export default function Hero() {
  const { scrollToSection } = useScroll();

  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src={lineImg} />
            <Subtitle>What i do</Subtitle>
          </WhatWeDo>
          <Desc>
            I create everything that comes to mind, enjoying the process.
          </Desc>
          <Button onClick={() => scrollToSection("works")}>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src={cosmonaut} />
        </Right>
      </Container>
    </Section>
  );
}
