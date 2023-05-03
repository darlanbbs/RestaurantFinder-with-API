import * as C from "reactstrap";
import styled from "styled-components";

export const Container = styled(C.Container)`
  background-image: url("./backgroundHeader.png");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-repeat: repeat-x;
  flex-direction: column;
  font-family: ${(props) => props.theme.font.font};
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.title.color};
  font-size: ${(props) => props.theme.title.size};
  margin: 10px 0;
`;

export const Form = styled.form`
  width: 99vw;
  display: flex;
  justify-content: center;
`;
export const Input = styled(C.Input)`
  border-radius: 10px;
  width: 40%;

  @media (max-width: 768px) {
    width: 70%;
  }
`;
