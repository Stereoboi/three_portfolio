import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ResumeLink = styled(Link)`
  display: flex;
  width: fit-content;
  margin-top: 10px;
  text-decoration: none;
  margin-top: 10px;
  color: rgb(32, 2, 90);
  transition: 0.2s ease-in-out;
  &:hover {
    color: #da4ea2;
  }
`;

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
  font-size: 18px;
`;
export const ImgWrapper = styled.div`
  padding: 20px;
  @media only screen and (max-width: 768px) {
    padding: 15px;
  }
`;
export const BioHeader = styled.h1`
  padding: 10px 0 15px 0;
  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }
`;
export const BioContent = styled.p`
  max-width: 500px;
  min-width: 376px;

  /* text-indent: 3ch; */
`;

export const ByeWrapper = styled.p`
  margin-top: 10px;
`;
