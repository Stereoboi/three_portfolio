import { styled } from "styled-components";

export const MainWrp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
`;
export const CardWrp = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  object-fit: cover;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const HiddenWrp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 39, 46, 0.7);
  opacity: 0;
  transform: translateY(100%);
  transition: transform 0.3s ease, opacity 0.3s ease;

  ${CardWrp}:hover & {
    cursor: pointer;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Description = styled.p`
  color: white;
  font-size: 18px;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    word-spacing: 2px;
  }
`;
