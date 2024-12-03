import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(18,18,20,1);
  text-align: center;
`;

const LoadingText = styled.span`
  margin-top: 20px;
  font-size: 18px;
  color: #C4C4CC;
  animation: ${fadeIn} 0.8s ease-in-out;
  font-size: 24px;
`;

const SubTitle = styled(LoadingText)`
  font-size: 14px;
  color: #C4C4CC;
`;

export {
  Container,
  SubTitle,
  LoadingText,
}