import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color:  ${({ theme }) => theme.background};
  padding: 1em .2em;
  border-bottom: 1px solid rgba(0,0,0,.1);
  color: hsl(200, 15%, 8%);
  position: sticky;
  top: 0;
  h1 {
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export const HeaderWrapper = styled.div`
  width: 94%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledLogo = styled.button`
  padding: .6em;
  color: ${({ theme }) => theme.text};
  @media (max-width: 375px) {

    h1 {
      max-width: 117px;
    }
  }
`