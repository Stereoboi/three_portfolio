import { styled } from "styled-components";

export const MainWrapper = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
    padding: 0 30px 0 30px;
  }
`;
export const CardWrapper = styled.div`
  position: relative;
`;
export const Image = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  top: 0;
  right: 0;
  /* @media only screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  } */
`;
export const BioWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
`;
export const ImgWrapper = styled.div`
  padding: 20px;
`;
export const BioHeader = styled.h1`
  padding: 10px 0 15px 0;
`;
export const BioContent = styled.p`
  max-width: 500px;
  min-width: 376px;
  font-size: 18px;
  /* text-indent: 3ch; */
`;

export const ByeWrapper = styled.span`
  margin-top: 15px;
`;
