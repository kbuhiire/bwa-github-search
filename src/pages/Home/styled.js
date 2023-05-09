import styled from "styled-components";
import {breakPoints} from "../../constants";

export const StyledLoadingContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  min-height: calc(80vh);
`
export const StyledNoContentCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  min-height: calc(80vh);
`

export const StyledUserGroupCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: ${breakPoints[2]}px) {
    margin-top: 2rem;
    justify-content: center;
  }
`

export const StyledUserGroupContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 15px auto;
  width: 80%;
  min-height: 100vh;
`