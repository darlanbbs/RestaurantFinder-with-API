import * as C from "reactstrap";
import styled from "styled-components";

export const Row = styled(C.Row)`
  gap: 20px;
  margin: 10px auto;
`;
export const Card = styled(C.Card)`
  width: 18rem;
  font-family: ${(props) => props.theme.font.font};
  transition: 0.3s;
  &:hover {
    filter: brightness(85%);
  }
`;

export const Restaurant = styled(C.CardTitle)`
  color: ${(props) => props.theme.cardColors.restaurant};
  font-size: ${(props) => props.theme.cardSizes.restaurant};
  font-weight: bold;
`;

export const Local = styled(C.CardText)`
  color: ${(props) => props.theme.cardColors.local};
  font-size: ${(props) => props.theme.cardSizes.local};
`;

export const Price = styled(C.CardSubtitle)`
  color: ${(props) => props.theme.cardColors.price};
  font-size: ${(props) => props.theme.cardSizes.price};
  font-weight: bold;
`;
