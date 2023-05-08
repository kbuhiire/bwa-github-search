import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledUserGroupCard = styled(Link)`
  width: calc(20.33% - 20px);
  height: 150px;
  min-width: 150px;
  background-color: ${({ theme }) => theme.colorCardBg};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.colorHover};
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    width: calc(100% - 20px);
  }
`

export const StyledUserGroupCardItem = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledLeftItem = styled.div`
  width: 80px;
  padding: 10px
`
export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1em;
`

export const StyledUserHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1em;
  padding-top: 5px;
`

export const StyledText = styled.h5`
  overflow-wrap: anywhere;
`