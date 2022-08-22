import styled from "styled-components";

export const Spin = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  background-image: url("${process.env.PUBLIC_URL}/images/crown.svg");
  background-repeat: no-repeat;
  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ContainerSpinner = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
