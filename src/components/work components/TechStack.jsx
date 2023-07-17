import {
  IconWrp,
  MainWrp,
  Text,
  ReactIcon,
  NextIcon,
  TSIcon,
  MongoIcon,
  FirebaseIcon,
  ExpressIcon,
  StrapiIcon,
  ReduxIcon,
  NodeIcon,
  JSIcon,
  ThreeIcon,
  TWIcon,
} from "./TechStack.styled";

export default function TechStack() {
  return (
    <MainWrp>
      <IconWrp technology={"JavaScript"}>
        <JSIcon />
        <Text technology={"JavaScript"}>JavaScript</Text>
      </IconWrp>
      <IconWrp technology={"TypeScript"}>
        <TSIcon />
        <Text technology={"TypeScript"}>TypeScript</Text>
      </IconWrp>
      <IconWrp technology={"React"}>
        <ReactIcon />
        <Text technology={"React"}>React</Text>
      </IconWrp>
      <IconWrp technology={"NextJS"}>
        <NextIcon />
        <Text technology={"NextJS"}>NextJS</Text>
      </IconWrp>
      <IconWrp technology={"NodeJS"}>
        <NodeIcon />
        <Text technology={"NodeJS"}>NodeJS</Text>
      </IconWrp>
      <IconWrp technology={"Express"}>
        <ExpressIcon />
        <Text technology={"Express"}>Express</Text>
      </IconWrp>
      <IconWrp technology={"MongoDB"}>
        <MongoIcon />
        <Text technology={"MongoDB"}>MongoDB</Text>
      </IconWrp>
      <IconWrp technology={"Firebase"}>
        <FirebaseIcon />
        <Text technology={"Firebase"}>Firebase</Text>
      </IconWrp>
      <IconWrp technology={"Strapi"}>
        <StrapiIcon />
        <Text technology={"Strapi"}>Strapi</Text>
      </IconWrp>
      <IconWrp technology={"Redux"}>
        <ReduxIcon />
        <Text technology={"Redux"}>Redux</Text>
      </IconWrp>

      <IconWrp technology={"Three"}>
        <ThreeIcon />
        <Text technology={"Three"}>ThreeJS</Text>
      </IconWrp>
      <IconWrp technology={"Tailwind"}>
        <TWIcon />
        <Text technology={"Tailwind"}>Tailwind</Text>
      </IconWrp>
    </MainWrp>
  );
}
