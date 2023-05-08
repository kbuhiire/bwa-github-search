import styled from "styled-components";
import {breakPoints} from "../../constants";

export const StyledBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.btnColor};
  background-color: ${({ theme }) => theme.btnBgColor};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  @media screen and (max-width: ${breakPoints[2]}px) {
    width: 80%;
    font-size: 0.8rem;
    padding: 0.5rem 0.6rem;
  }
`

export const StyledBtnText = styled.span`
    margin-left: 10px;
`