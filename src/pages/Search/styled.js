import styled from "styled-components";
import {breakPoints} from "../../constants";

export const StyledSearchContainer = styled.div`
    display: flex;
    flex-direction: column;
  @media screen and (max-width: ${breakPoints[2]}px) {
    margin: 1rem;
    align-items: center;
    .search-wrapper {
      justify-content: start;
      flex-wrap: wrap;
    }
  }
`;
export const StyledRadioGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const StyledRadioGroupLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`

export const StyledSearchInputContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${breakPoints[2]}px) {
    flex-direction: column;
  }
`
export const StyledSearchInput = styled.input`
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg==');
  background-color: var(--bg-offset);
  background-size: 16px 16px;
  background-position: left 10px center;
  background-repeat: no-repeat;
  width: 500px;
  padding: 1.2em 1em 1.2em 2.7em;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.colorSearchInput};
  box-shadow: 0 4px 6px ${({ theme }) => theme.border};
  transition: all .4s cubic-bezier(0.215, 0.610, 0.355, 1);
  margin-right: 10px;
  @media screen and (max-width: ${breakPoints[2]}px) {
    margin-bottom: 15px;
    width: 350px;
  }
`