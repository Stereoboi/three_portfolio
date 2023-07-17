import { styled } from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  font-family: "Londrina Solid";
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

export const Button = styled.button`
  font-family: "Londrina Solid";
  letter-spacing: 5px;
  font-size: 15px;
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #9e3976;
  }
`;

export const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
