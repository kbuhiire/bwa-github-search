import styled, {keyframes} from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
export const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 6em 0;

  p {
    margin-top: 2em;
    text-align: center;
  }
`
export const StyledLoadingAnimation = styled.span`
  animation: ${spin} 1s linear infinite;
`
export const StyledText = styled.span`
  font-size: 14px;
  font-weight: bold;
`