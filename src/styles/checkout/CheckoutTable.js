import styled from "styled-components";

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  &:last-child {
    width: 8%;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
`;
