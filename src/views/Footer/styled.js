import styled from "styled-components";
export const StyledFooter = styled.div`
  position: sticky;
  bottom: 0;
  background-color: ${({ theme }) => theme.bgOffset};
  border-top:1px solid ${({ theme }) => theme.border};
  padding: 0.3rem 0 0.5rem 0;
`

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`
export const StyledSelect = styled.select`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  option {
    color: #333;
    background-color: #fff;
  }
`