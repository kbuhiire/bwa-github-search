import styled from "styled-components";

export const StyledContainerWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  min-height: 100vh;
`
export const StyledContainerCard = styled.div`
  width: calc(33.33% - 20px);
  min-width: 150px;
  background-color: ${({ theme }) => theme.colorCardBg};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  
  @media screen and (max-width: 600px) {
    width: calc(100% - 20px);
  }
`

export const StyledLoadingContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  min-height: calc(80vh);
`
export const StyledProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1em;
`

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`

export const StyledLeftText = styled.h5`
  font-size: 14px;
`

export const StyledRightText = styled.p`
  font-size: 14px;
  text-align: end;
`