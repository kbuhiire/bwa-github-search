import styled from 'styled-components'
export const StyledLabel = styled.label`
  font-size: 14px;
  padding-left: 10px;
  color: ${({ theme }) => theme.text};
`

export const StyledRadioLabel = styled(StyledLabel)`
  white-space: nowrap;
`
export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || 'row' };
  align-items: center;
`;



