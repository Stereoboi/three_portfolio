import { styled } from "styled-components";
export const GlobalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const UpWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

export const Card1 = styled.button`
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 90px 5px 5px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #cc39a4;
    fill: white;
  }
`;
export const Card2 = styled.button`
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 90px 5px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #03a9f4;
    fill: white;
  }
`;
export const DownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;
export const Card3 = styled.button`
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 5px 5px 90px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: rgb(82, 80, 80);
    fill: white;
  }
`;
export const Card4 = styled.button`
  width: 90px;
  height: 90px;
  outline: none;
  border: none;
  background: white;
  border-radius: 5px 5px 90px 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #8c9eff;
    fill: white;
  }
`;
export const SvgInst = styled.div``;
export const SvgTw = styled.div``;
export const SvgGh = styled.div``;
export const SvgDc = styled.div``;
