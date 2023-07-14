import {
  BioContent,
  BioHeader,
  BioWrapper,
  Image,
  MainWrapper,
  CardWrapper,
  ImgWrapper,
  ByeWrapper,
} from "./Skills.styled";
import Photo from "../../../public/stereoboi.jpg";

export default function Skills() {
  return (
    <MainWrapper>
      <CardWrapper>
        <ImgWrapper>
          <Image src={Photo} />
        </ImgWrapper>
        <BioWrapper>
          <BioHeader>A few words about myself.</BioHeader>
          <BioContent>
            My name is Bohdan, and I am passionate about studying the world of
            frontend development. You might be curious about what specifically
            attracts me to this field. Perhaps it's the fact that with the help
            of a browser and Google, you can bring almost any idea to life using
            just a keyboard. It's amazing! I still have a lot to learn, but I'm
            taking small steps towards my goal. I'm also in search of a team to
            join, where I can improve my skills and gain experience. If my
            profile has caught your interest, please feel free to reach out to
            me.
            <ByeWrapper>Sincerely, Bohdan Pishchak</ByeWrapper>
          </BioContent>
        </BioWrapper>
      </CardWrapper>
    </MainWrapper>
  );
}
