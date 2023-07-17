import { styled } from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
export const Logo = styled.p`
  font-family: "Luckiest Guy";
`;
export const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const ListItem = styled.li`
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #da4ea2;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
// const Icon = styled.img`
//   width: 20px;
//   cursor: pointer;
// `;
export const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  font-family: "Londrina Solid";
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #9e3976;
  }
`;
